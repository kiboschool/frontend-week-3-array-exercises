const findMultiplesOfThree = require('./find-multiples-of-three')

describe('findMultiplesOfThree', () => { 
    it('should return the first multiple of three', () => { 
        const numArray = [1, 2, 3, 4, 5];

        expect(findMultiplesOfThree(numArray)).toEqual(3);
    })
})
