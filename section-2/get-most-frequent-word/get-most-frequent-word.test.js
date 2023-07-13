const w = require('jest-autograding-reporter').weight
const getMostFrequentWord = require('./get-most-frequent-word')

describe('getMostFrequentWord', () => { 
    it(w(1,'should return the most frequent word in the sentence'), () => { 
        const sentence = "apple apple orange apple banana banana apple";

        expect(getMostFrequentWord(sentence)).toEqual("apple");
    })
})
