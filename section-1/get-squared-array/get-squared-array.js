/**
 * getSquaredArray - A function that squares each number in the array.
 *
 * @param {Array<number>} numArray - An array of numbers
 * @returns {Array<number>} - An array with each number squared
 *
 * Usage:
 * const numArray = [1, 2, 3, 4, 5];
 * const result = getSquaredArray(numArray);
 * Output: [1, 4, 9, 16, 25]
 */
function getSquaredArray(numArray) {
    return numArray.map(num => num * num);
}

module.exports = getSquaredArray;
