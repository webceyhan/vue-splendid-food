import { createStore } from "vuex";

import products from "./products";
import orders from "./orders";
import cart from "./cart";

export default createStore({
    modules: {
        products,
        orders,
        cart,
    },
});
