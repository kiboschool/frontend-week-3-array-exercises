/**
 * squareRootArray - A function that finds the square root of each number in the array.
 *
 * @param {Array<number>} numArray - An array of numbers
 * @returns {Array<number>} - An array with the square root of each number
 *
 * Usage:
 * const numArray = [1, 4, 9, 16, 25];
 * const result = squareRootArray(numArray);
 * Output: [1, 2, 3, 4, 5]
 */
function squareRootArray(numArray) {
    return numArray.map(num => Math.sqrt(num));
}

module.exports = squareRootArray;
