import foods from './data/foods.json';
import { shuffle } from './utils';

export default {
    /**
     *
     * @param {string?} filter
     * @returns {object[]}
     */
    getProducts(filter = null) {
        if (!filter || filter === 'all') return foods;

        return foods.filter(({ type }) => type === filter);
    },

    /**
     *
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
