const accumulateArray = require('./accumulate-array')

describe('accumulateArray', () => { 
    it('should return the sum of all numbers', () => { 
        const numArray = [1, 2, 3, 4, 5];

        expect(accumulateArray(numArray)).toEqual(15);
    })
})
