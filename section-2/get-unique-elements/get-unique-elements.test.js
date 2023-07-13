const w = require('jest-autograding-reporter').weight
const getUniqueElements = require('./get-unique-elements')

describe('getUniqueElements', () => { 
    it(w(1,'should return array with unique elements'), () => { 
        const array = [1, 2, 2, 3, 3, 3];

        expect(getUniqueElements(array)).toEqual([1, 2, 3]);
    })
})
