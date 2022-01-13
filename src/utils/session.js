export const session = {
    /**
     *
     * @param {string} key
     * @param {*} defaultValue
     * @returns {*}
     */
    get(key, defaultValue) {
        const rawItem = localStorage.getItem(key);

        return JSON.parse(rawItem) || defaultValue;
    },

    /**
     *
     * @param {string} key
     * @param {object} item
     */
    set(key, item) {
        const rawItem = JSON.stringify(item);

        localStorage.setItem(key, rawItem);
    },

    /**
     *
     */
    clear() {
        localStorage.clear();
    },
};
