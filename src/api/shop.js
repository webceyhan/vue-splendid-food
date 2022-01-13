import foods from "./data/foods.json";
import { shuffle, uniqueByKey } from "../utils";

export default {
    async getTypes() {
        return uniqueByKey(foods, "type");
    },

    async getProducts(type = null) {
        if (!type || type === "all") return foods;

        return foods.filter((item) => item.type === type);
    },

    async getRecommendedProducts() {
        return shuffle(foods).slice(0, 3);
    },
};
