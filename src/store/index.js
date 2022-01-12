import { reactive } from 'vue';

import products from './products';
import orders from './orders';

import cart from './data/cart.json';

export default {
    ...products,
    ...orders,

    cart: reactive(cart),

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
};
