import foods from "./data/foods.json";
import { shuffle } from "./utils";

// initial state
const state = () => ({
    all: [...foods],
});

// getters
const getters = {
    getTypes: (state) => [
        "all",
        ...Object.keys(
            state.all.reduce((all, { type }) => ({ ...all, [type]: null }), {})
        ),
    ],

    getByType: (state) => (type) => {
        if (!type || type === "all") return state.all;

        return state.all.filter((item) => item.type === type);
    },

    getRecommended: (state) => shuffle(state.all).slice(0, 3),
};

export default {
    namespaced: true,
    state,
    getters,
};
