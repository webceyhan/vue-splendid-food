import { reactive } from 'vue';

import orders from './data/orders.json';

export default {
    orders: reactive(orders),

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
