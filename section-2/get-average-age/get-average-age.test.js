const getAverageAge = require('./get-average-age')

describe('getAverageAge', () => { 
    it('should return the average age', () => { 
        const array = [{ name: "John", age: 20 }, { name: "Jane", age: 22 }];

        expect(getAverageAge(array)).toEqual(21);
    })
})
