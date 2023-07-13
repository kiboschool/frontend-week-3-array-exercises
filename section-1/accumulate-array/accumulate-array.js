/**
 * accumulateArray - A function that accumulates (sums) all numbers in the array.
 *
 * @param {Array<number>} numArray - An array of numbers
 * @returns {number} - The sum of all numbers in the array
 *
 * Usage:
 * const numArray = [1, 2, 3, 4, 5];
 * const result = accumulateArray(numArray);
 * Output: 15
 */
function accumulateArray(numArray) {
    return numArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

module.exports = accumulateArray;
