import { reactive } from "vue";

import foods from './data/foods.json';
import orders from './data/orders.json';
import cart from './data/cart.json';

export default {
    foods,
    orders: reactive(orders),
    cart: reactive(cart),
};
