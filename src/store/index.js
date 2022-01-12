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
     * @returns {object[]}
     */
    getProducts() {
        return foods;
    },

    /**
     * @returns {object[]}
     */
    getRecommendedProducts() {
        return shuffle(this.getProducts()).slice(0, 3);
    },

    // CART ////////////////////////////////////////////////////////////////////////////////////////
    /**
     * @returns {object[]}
     */
    getCartItems() {
        return Object.values(this.cart);
    },

    /**
     *
     * @returns {number}
     */
    getCartItemCount() {
        return Object.keys(this.cart).length;
    },

    /**
     * @returns {number}
     */
    getCartTotal() {
        return this.getCartItems()
            .reduce((sum, item) => sum + +item.price * item.quantity, 0)
            .toFixed(2);
    },

    /**
     * @returns {bool}
     */
    isCartEmpty() {
        return this.getCartItems().length === 0;
    },

    /**
     * @param {object} item
     */
    addToCart(item) {
        this.cart[item.id] = item;
    },

    /**
     * @param {object} item
     */
    removeFromCart(item) {
        delete this.cart[item.id];
    },

    /**
     *
     */
    clearCart() {
        const keys = Object.keys(this.cart);

        for (let key of keys) {
            delete this.cart[key];
        }
    },

    /**
     *
     */
    checkout() {
        this.setOrders(this.getCartItems());
        this.clearCart();
    },

    // ORDERS //////////////////////////////////////////////////////////////////////////////////////
    /**
     * @returns {object[]}
     */
    getOrders() {
        return this.orders;
    },

    /**
     * @param {object[]} items
     */
    setOrders(items) {
        this.orders.splice(0, this.orders.length);
        this.orders.push(...items);
    },
};
