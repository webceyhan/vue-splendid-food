import foods from './data/foods.json';
import { shuffle } from './utils';

export default {
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
        return shuffle(foods).slice(0, 3);
    },
};
