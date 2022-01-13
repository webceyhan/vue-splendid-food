import { session } from "../utils";

const SESSION_KEY = "orders";

// initial state
const state = () => ({
    items: [],
});

const mutations = {
    setItems(state, items) {
        state.items.splice(0, state.items.length);
        state.items.push(...items);
    },
};

// actions
const actions = {
    async loadOrders({ commit }) {
        const items = session.get(SESSION_KEY, []); // db fetch
        commit("setItems", items);
    },

    async makeOrders({ commit }, items) {
        session.set(SESSION_KEY, items); // db write
        commit("setItems", items);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
