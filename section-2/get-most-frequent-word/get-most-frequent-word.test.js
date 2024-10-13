const getMostFrequentWord = require('./get-most-frequent-word')

describe('getMostFrequentWord', () => { 
    it('should return the most frequent word in the sentence', () => { 
        const sentence = "apple apple orange apple banana banana apple";

        expect(getMostFrequentWord(sentence)).toEqual("apple");
    })
})
