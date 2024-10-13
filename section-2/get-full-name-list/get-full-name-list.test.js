const getFullNameList = require('./get-full-name-list')

describe('getFullNameList', () => { 
    it('should return array with full names', () => { 
        const array = [{ firstName: "John", lastName: "Doe" }, { firstName: "Jane", lastName: "Doe" }];

        expect(getFullNameList(array)).toEqual(["John Doe", "Jane Doe"]);
    })
})
