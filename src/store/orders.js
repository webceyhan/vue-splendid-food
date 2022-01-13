import { session } from "./utils";

const SESSION_KEY = "orders";

// initial state
const state = () => ({
    items: [...session.get(SESSION_KEY, [])],
});

const mutations = {
    setItems(state, items) {
        state.items.splice(0, state.items.length);
        state.items.push(...items);

        session.set(SESSION_KEY, state.items);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
};
