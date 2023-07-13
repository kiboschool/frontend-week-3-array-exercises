/**
 * sortArrayDescending - A function that sorts an array in descending order.
 *
 * @param {Array} array - An array of numbers
 * @returns {Array} - Sorted array in descending order
 *
 * Usage:
 * const array = [1, 2, 3, 4, 5];
 * const result = sortArrayDescending(array);
 * Output: [5, 4, 3, 2, 1]
 */
function sortArrayDescending(array) {
    return array.sort((a, b) => b - a);
}

module.exports = sortArrayDescending;
