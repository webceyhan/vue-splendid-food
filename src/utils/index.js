export * from "./session";

/**
 *
 * @param {[]} arr
 * @returns {[]}
 */
export const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());

/**
 *
 * @param {*} obj
 * @param {string} key
 * @returns {[]}
 */
export const uniqueByKey = (obj, key) =>
    Object.keys(obj.reduce((all, item) => ({ ...all, [item[key]]: null }), {}));
