const w = require('jest-autograding-reporter').weight
const countByProperty = require('./count-by-property')

describe('countByProperty', () => { 
    it(w(1,'should return an object with counts of property values'), () => { 
        const array = [{ color: "red" }, { color: "blue" }, { color: "red" }];

        expect(countByProperty(array, "color")).toEqual({ "red": 2, "blue": 1 });
    })
})
