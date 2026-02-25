const { fibonacci, sumOfDigits } = require("../../my-utils")

describe('this is test suite for my-utils file', () => { // test suite = group of testcase
    it('should verify fibonacci method', () => {
        // expect(actual).matcher(expected)
        expect(fibonacci(6)).toBe(8);
        expect(fibonacci(7)).toBe(13);
        expect(fibonacci(8)).toBe(21);
    })
    it('should verify sumOfDigits method', () => {
        expect(sumOfDigits(125)).toBe(8);
    })
})  