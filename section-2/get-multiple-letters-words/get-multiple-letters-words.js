/**
 * getMultipleLettersWords - A function that retrieves words with multiple identical letters.
 *
 * @param {string} sentence - A sentence
 * @returns {Array} - An array with words that contain multiple identical letters
 *
 * Usage:
 * const sentence = "the apple is over ball and a room";
 * const result = getMultipleLettersWords(sentence);
 * Output: ["apple", "ball"]
 */
function getMultipleLettersWords(sentence) {
    let words = sentence.split(' ');
    return words.filter(word => hasDuplicateLetters(word));
}

function hasDuplicateLetters(word) {
    let letters = {};
    for (let i = 0; i < word.length; i++) {
        if (letters[word[i]]) {
            return true;
        } else {
            letters[word[i]] = true;
        }
    }
    return false;
}

module.exports = getMultipleLettersWords;

