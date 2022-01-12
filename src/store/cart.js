import { reactive } from 'vue';
import { session } from './utils';
import cart from './data/cart.json';

const SESSION_KEY = 'cart';

export default {
    cart: reactive(session.get(SESSION_KEY, cart)),

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
        session.set(SESSION_KEY, this.cart);
    },

    /**
     * @param {object} item
     */
    removeFromCart(item) {
        delete this.cart[item.id];
        session.set(SESSION_KEY, this.cart);
    },

    /**
     *
     */
    clearCart() {
        Object.keys(this.cart).forEach((key) => delete this.cart[key]);
        session.set(SESSION_KEY, {});
    },

    /**
     *
     */
    checkout() {
        this.setOrders(this.getCartItems());
        this.clearCart();
    },
};
