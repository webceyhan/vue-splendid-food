import foods from './data/foods.json';

// Utils
const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());

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
