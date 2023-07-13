const w = require('jest-autograding-reporter').weight
const filterBySearch = require('./filter-by-search')

describe('filterBySearch', () => { 
    it(w(1,'should return an array with strings that include the search term'), () => { 
        const array = ["apple", "banana", "cherry"];

        expect(filterBySearch(array, "an")).toEqual(["banana"]);
    })
})
