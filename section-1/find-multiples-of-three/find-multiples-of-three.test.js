const w = require('jest-autograding-reporter').weight
const findMultiplesOfThree = require('./find-multiples-of-three')

describe('findMultiplesOfThree', () => { 
    it(w(1,'should return the first multiple of three'), () => { 
        const numArray = [1, 2, 3, 4, 5];

        expect(findMultiplesOfThree(numArray)).toEqual(3);
    })
})
