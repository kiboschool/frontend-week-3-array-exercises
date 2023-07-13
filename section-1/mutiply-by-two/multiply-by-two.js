/**
 * multiplyByTwo - A function that multiplies each number in the array by two.
 *
 * @param {Array<number>} numArray - An array of numbers
 * @returns {Array<number>} - An array with each number multiplied by two
 *
 * Usage:
 * const numArray = [1, 2, 3, 4, 5];
 * const result = multiplyByTwo(numArray);
 * Output: [2, 4, 6, 8, 10]
 */
function multiplyByTwo(numArray) {
    return numArray.map(num => num * 2);
}

module.exports = multiplyByTwo;
