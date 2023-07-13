const w = require('jest-autograding-reporter').weight
const getLongestWord = require('./get-longest-word')

describe('getLongestWord', () => { 
    it(w(1,'should return the longest word in the sentence'), () => { 
        const sentence = "The quickest brown fox jumps over the lazy dog";

        expect(getLongestWord(sentence)).toEqual("quickest");
    })
})
