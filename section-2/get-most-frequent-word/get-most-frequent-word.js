/**
 * getMostFrequentWord - A function that gets the most frequent word from a sentence.
 *
 * @param {string} sentence - A sentence
 * @returns {string} - The most frequent word in the sentence
 *
 * Usage:
 * const sentence = "apple apple orange apple banana banana apple";
 * const result = getMostFrequentWord(sentence);
 * Output: "apple"
 */
function getMostFrequentWord(sentence) {
    let words = sentence.split(' ');
    let counts = words.reduce((counts, word) => {
        if (!counts[word]) counts[word] = 0;
        counts[word]++;
        return counts;
    }, {});

    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
}

module.exports = getMostFrequentWord;
