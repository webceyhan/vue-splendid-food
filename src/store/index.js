import products from './products';
import orders from './orders';
import cart from './cart';

export default {
    ...products,
    ...orders,
    ...cart,
};
