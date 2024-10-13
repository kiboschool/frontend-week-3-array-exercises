const findYoungestPerson = require('./find-youngest-person')

describe('findYoungestPerson', () => { 
    it('should return the name of the youngest person', () => { 
        const array = [{ name: "John", age: 20 }, { name: "Jane", age: 19 }];

        expect(findYoungestPerson(array)).toEqual("Jane");
    })
})
