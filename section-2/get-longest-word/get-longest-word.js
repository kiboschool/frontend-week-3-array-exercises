/**
 * getLongestWord - A function that gets the longest word from a sentence.
 *
 * @param {string} sentence - A sentence
 * @returns {string} - The longest word in the sentence
 *
 * Usage:
 * const sentence = "The quick brown fox jumps over the lazy dog";
 * const result = getLongestWord(sentence);
 * Output: "jumps"
 */
function getLongestWord(sentence) {
    return sentence.split(' ').reduce((longestWord, currentWord) => currentWord.length > longestWord.length ? currentWord : longestWord, '');
}

module.exports = getLongestWord;
