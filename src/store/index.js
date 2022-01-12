import { reactive } from 'vue';

import foods from './data/foods.json';
import orders from './data/orders.json';
import cart from './data/cart.json';

// Utils
export const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());

export default {
    foods,
    orders: reactive(orders),
    cart: reactive(cart),

    // PRODUCTS ////////////////////////////////////////////////////////////////////////////////////
    /**
     * @returns {Array}
     */
    getProducts() {
        return foods;
    },

    /**
     * @returns {Array}
     */
    getRecommendedProducts() {
        return shuffle(this.getProducts()).slice(0, 3);
    },

    // CART ////////////////////////////////////////////////////////////////////////////////////////
    addToCart(item) {
        this.cart[item.id] = item;
    },
};
