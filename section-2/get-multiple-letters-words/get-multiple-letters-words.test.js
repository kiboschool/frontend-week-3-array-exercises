const w = require('jest-autograding-reporter').weight
const getMultipleLettersWords = require('./get-multiple-letters-words')

describe('getMultipleLettersWords', () => { 
    it(w(1,'should return words with multiple identical letters'), () => { 
        const sentence = "the apple is over ball and a room";

        expect(getMultipleLettersWords(sentence)).toEqual(["apple", "ball", "room"]);
    })
})
