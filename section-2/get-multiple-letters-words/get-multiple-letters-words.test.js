const getMultipleLettersWords = require('./get-multiple-letters-words')

describe('getMultipleLettersWords', () => { 
    it('should return words with multiple identical letters', () => { 
        const sentence = "apple ball room";

        expect(getMultipleLettersWords(sentence)).toEqual(["apple", "ball"]);
    })
})
