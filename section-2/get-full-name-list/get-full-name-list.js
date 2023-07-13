/**
 * getFullNameList - A function that generates an array with full names from an array of objects.
 *
 * @param {Array<{ firstName: string, lastName: string }>} array - An array of objects, each object having `firstName` and `lastName` properties
 * @returns {Array} - Array with full names
 *
 * Usage:
 * const array = [{ firstName: "John", lastName: "Doe" }, { firstName: "Jane", lastName: "Doe" }];
 * const result = getFullNameList(array);
 * Output: ["John Doe", "Jane Doe"]
 */
function getFullNameList(array) {
    return array.map(person => `${person.firstName} ${person.lastName}`);
}

module.exports = getFullNameList;
