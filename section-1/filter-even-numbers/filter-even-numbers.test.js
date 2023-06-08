const filterEvenNumbers = require('./filter-even-numbers')

describe('filterEvenNumbers', () => { 
    it('should filter out odd numbers', () => { 
        const numArray = [1, 2, 3, 4, 5];

        expect(filterEvenNumbers(numArray)).toEqual([2, 4]);
    })
})
