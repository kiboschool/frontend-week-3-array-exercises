const getUniqueElements = require('./get-unique-elements')

describe('getUniqueElements', () => { 
    it('should return array with unique elements', () => { 
        const array = [1, 2, 2, 3, 3, 3];

        expect(getUniqueElements(array)).toEqual([1, 2, 3]);
    })
})
