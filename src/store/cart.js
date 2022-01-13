import { session } from "./utils";

const SESSION_KEY = "cart";

// initial state
const state = () => ({
    cart: { ...session.get(SESSION_KEY, {}) },
});

// getters
const getters = {
    getItems: (state) => Object.values(state.cart),

    getItemCount: (state) => Object.keys(state.cart).length,

    getTotal: (state, getters) =>
        getters.getItems
            .reduce((sum, item) => sum + +item.price * item.quantity, 0)
            .toFixed(2),

    isEmpty: (state, getters) => getters.getItemCount === 0,
};

// mutations
const mutations = {
    addItem(state, item) {
        state.cart[item.id] = item;
        session.set(SESSION_KEY, state.cart);
    },

    removeItem(state, item) {
        delete state.cart[item.id];
        session.set(SESSION_KEY, state.cart);
    },

    clear(state) {
        Object.keys(state.cart).forEach((key) => delete state.cart[key]);
        session.set(SESSION_KEY, {});
    },
};

// actions
const actions = {
    checkout({ commit, getters }) {
        commit("orders/setItems", getters.getItems, { root: true });
        commit("clear");
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
