const multiplyByTwo = require('./multiply-by-two')

describe('multiplyByTwo', () => { 
    it('should multiply all elements by two', () => { 
        const numArray = [1, 2, 3, 4, 5];

        expect(multiplyByTwo(numArray)).toEqual([2, 4, 6, 8, 10]);
    })
})
