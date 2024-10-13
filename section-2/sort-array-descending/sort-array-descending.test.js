const sortArrayDescending = require('./sort-array-descending')

describe('sortArrayDescending', () => { 
    it('should return array sorted in descending order', () => { 
        const array = [1, 2, 3, 4, 5];

        expect(sortArrayDescending(array)).toEqual([5, 4, 3, 2, 1]);
    })
})
