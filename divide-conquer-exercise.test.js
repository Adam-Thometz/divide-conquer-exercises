describe ('countZeroes function', function() {
    it('should count all zeros in an array', function() {
        expect(countZeroes([1,1,1,1,0,0])).toEqual(2)
        expect(countZeroes([1,0,0,0,0])).toEqual(4)
        expect(countZeroes([0,0,0])).toEqual(3)
        expect(countZeroes([1,1,1,1])).toEqual(0)
    })
})

describe ('sortedFrequency function', function() {
    it('should count the number of times a number occurs in an array', function() {
        expect(sortedFrequency([1,1,2,2,2,2,3],2)).toBe(4)
        expect(sortedFrequency([1,1,2,2,2,2,3],3)).toBe(1)
        expect(sortedFrequency([1,1,2,2,2,2,3],1)).toBe(2)
        expect(sortedFrequency([1,1,2,2,2,2,3],4)).toBe(-1)
    })
})
    
describe ('findRotatedIndex function', function() {
    it('should find the index of a number in an array', function() {
        expect(findRotatedIndex([3,4,1,2],4)).toBe(1)
        expect(findRotatedIndex([6,7,8,9,1,2,3,4],8)).toBe(2)
        expect(findRotatedIndex([6,7,8,9,1,2,3,4],3)).toBe(6)
        expect(findRotatedIndex([6,7,8,9,1,2,3,4],14)).toBe(-1)
        expect(findRotatedIndex([37,44,66,102,10,22],14)).toBe(-1)
    })
})
    
describe ('findRotationCount function', function() {
    it('find the amount of times an array "rotates"', function() {
        expect(findRotationCount([15, 18, 2, 3, 6, 12])).toBe(2)
        expect(findRotationCount([7, 9, 11, 12, 5])).toBe(4)
        expect(findRotationCount([7, 9, 11, 12, 15])).toBe(0)
    })
})

describe ('findFloor function', function() {
    it('should find the largest element of an array smaller than a passed number', function() {
        expect(findFloor([1,2,8,10,10,12,19], 9)).toBe(8)
        expect(findFloor([1,2,8,10,10,12,19], 20)).toBe(19)
        expect(findFloor([1,2,8,10,10,12,19], 0)).toBe(-1)
    })
})