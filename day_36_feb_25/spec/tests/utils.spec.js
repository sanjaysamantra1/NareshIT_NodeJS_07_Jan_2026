const { fibonacci, sumOfDigits, add, isPrime, repeatString } = require("../../my-utils")

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
    it('should verify add method', () => {
        expect(add(10, 20)).toBe(30);
        expect(add(-10, 20)).toBe(10);
        expect(add(-10, -20)).toBe(-30);
        expect(add(10, -20)).toBe(-10);
    })
    it('should verify isPrime method', () => {
        expect(isPrime(1)).toBe(false);
        expect(isPrime(2)).toBe(true);
        expect(isPrime(4)).toBe(false);
        expect(isPrime(9)).toBe(false);
    })
    it('should verify repeatString method', () => {
        expect(repeatString('Hi',2)).toBe('HiHi');
    })
})  