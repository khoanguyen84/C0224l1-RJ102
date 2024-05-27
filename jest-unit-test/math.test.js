const math = require('./math')
const { sum, minus } = math


describe('test case for sum function', () => {
    test("should be true", () => {
        expect(sum(5, 10)).toEqual(15)
    })

    test('should be NaN', () => {
        expect(sum(null, undefined)).toBeNaN()
    })

    test('should be greater than zero', () => {
        expect(sum(1, 1)).toBeGreaterThan(0)
    })
})


describe('test case for minus function', () => {
    test('should be less than zero', () => {
        expect(minus(1,2)).toBeLessThan(0)
    })
})