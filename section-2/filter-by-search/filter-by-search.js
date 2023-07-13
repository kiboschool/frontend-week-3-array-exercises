/**
 * filterBySearch - A function that filters an array of strings based on a search term.
 *
 * @param {Array<string>} array - An array of strings
 * @param {string} searchTerm - The search term
 * @returns {Array<string>} - An array with strings that include the search term
 *
 * Usage:
 * const array = ["apple", "banana", "cherry"];
 * const result = filterBySearch(array, "an");
 * Output: ["banana"]
 */
function filterBySearch(array, searchTerm) {
    return array.filter(item => item.includes(searchTerm));
}

module.exports = filterBySearch;
