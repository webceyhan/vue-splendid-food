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

    /**
     *
     * @returns {string[]}
     */
    getProductTypes() {
        return [
            'all',
            ...Object.keys(
                foods.reduce((all, { type }) => ({ ...all, [type]: null }), {})
            ),
        ];
    },
};
