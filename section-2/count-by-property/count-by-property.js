/**
 * countByProperty - A function that counts the number of occurrences of a specific property in an array of objects.
 *
 * @param {Array<Object>} array - An array of objects
 * @param {string} property - The property to count
 * @returns {Object} - An object with property values as keys and their counts as values
 *
 * Usage:
 * const array = [{ color: "red" }, { color: "blue" }, { color: "red" }];
 * const result = countByProperty(array, "color");
 * Output: { "red": 2, "blue": 1 }
 */
function countByProperty(array, property) {
    return array.reduce((count, obj) => {
        let key = obj[property];
        if (!count[key]) {
            count[key] = 0;
        }
        count[key]++;
        return count;
    }, {});
}

module.exports = countByProperty;
