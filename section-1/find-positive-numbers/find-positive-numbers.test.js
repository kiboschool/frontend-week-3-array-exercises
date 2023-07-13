const w = require('jest-autograding-reporter').weight
const findPositiveNumbers = require('./find-positive-numbers')

describe('findPositiveNumbers', () => { 
    it(w(1,'should return all positive numbers'), () => { 
        const numArray = [-1, 2, -3, 4, -5];

        expect(findPositiveNumbers(numArray)).toEqual([2, 4]);
    })
})
