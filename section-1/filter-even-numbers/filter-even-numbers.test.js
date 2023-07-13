const w = require('jest-autograding-reporter').weight
const filterEvenNumbers = require('./filter-even-numbers')

describe('filterEvenNumbers', () => { 
    it(w(1,'should filter out odd numbers'), () => { 
        const numArray = [1, 2, 3, 4, 5];

        expect(filterEvenNumbers(numArray)).toEqual([2, 4]);
    })
})
