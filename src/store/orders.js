import { reactive } from 'vue';
import { session } from './utils';

const SESSION_KEY = 'orders';

export default {
    orders: reactive(session.get(SESSION_KEY, [])),

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
        session.set(SESSION_KEY, this.orders);
    },
};
