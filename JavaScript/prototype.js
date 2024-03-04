// polyfill
if (Array.prototype.sum === undefined) {
    Array.prototype.sum = function () {
        let total = 0;
        for (let i = 0; i < this.length; i++) {
            total += this[i]
        }
        return total;
    }
}

if (Array.prototype.includes === undefined) {
    Array.prototype.includes = function (searchElement) {
        for (let i = 0; i < this.length; i++) {
            if(this[i] === searchElement)
                return true
        }
        return false;
    }
}

let numbers = new Array(4, 56, 7, 7, 78)
let numbers_2 = new Array(14, 56, 7, 7, 78)

console.log(numbers.includes(4))
console.log(numbers_2.includes(4))
