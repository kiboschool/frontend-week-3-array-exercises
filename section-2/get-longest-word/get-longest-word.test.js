const getLongestWord = require('./get-longest-word')

describe('getLongestWord', () => { 
    it('should return the longest word in the sentence', () => { 
        const sentence = "The quickest brown fox jumps over the lazy dog";

        expect(getLongestWord(sentence)).toEqual("quickest");
    })
})
