const { areaSquare } = require('./tdd')

describe('test case for Square', () => {
    test('should be greater than size', () => {
        expect(areaSquare(4)).toBeGreaterThan(0)
    })
    test('should be equal 25', () => {
        expect(areaSquare(5)).toBe(25)
    })
})