const squareRootArray = require('./square-root-array')

describe('squareRootArray', () => { 
    it('should return the square root of each number', () => { 
        const numArray = [1, 4, 9, 16, 25];

        expect(squareRootArray(numArray)).toEqual([1, 2, 3, 4, 5]);
    })
})
