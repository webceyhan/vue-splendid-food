import shop from "../api/shop";

// initial state
const state = () => ({
    all: [],
    types: [],
});

// muations
const mutations = {
    setTypes(state, types) {
        state.types = types;
    },

    setProducts(state, products) {
        state.all = products;
    },
};

// actions
const actions = {
    async loadTypes({ commit }) {
        const types = await shop.getTypes();
        commit("setTypes", types);
    },

    async loadProducts({ commit }, type) {
        const products = await shop.getProducts(type);
        commit("setProducts", products);
    },

    async loadRecommendedProducts({ commit }) {
        const products = await shop.getRecommendedProducts();
        commit("setProducts", products);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
