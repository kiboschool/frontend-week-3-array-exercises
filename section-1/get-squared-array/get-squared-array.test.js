const w = require('jest-autograding-reporter').weight
const getSquaredArray = require('./get-squared-array')

describe('getSquaredArray', () => { 
    it(w(1,'should return the square of each number'), () => { 
        const numArray = [1, 2, 3, 4, 5];

        expect(getSquaredArray(numArray)).toEqual([1, 4, 9, 16, 25]);
    })
})
