// 1. Declaration Function
function sum(number_1, number_2) {
    console.log(number_1 + number_2);
}

// sum(10, 20)

// 2. Expression Function
// const times = function (number_1, number_2) {
//     console.log(number_1 * number_2);
// }

// 3. Arrow Function
// const times_2 = function (number_1, number_2) {
//     return number_1 * number_2;
// }
const times_2 = (number_1, number_2) => console.log(number_1 * number_2);

const times_3 = (number_1, number_2) => number_1 * number_2;


console.log(times_2(5, 8))
// 4. Anonymous Function / Callback Function
let numbers = [4, 7, 3, 9, 10]
// let power_2 = numbers.map(function (n) {
//     return n ** 2;
// })
// let power_2 = numbers.map((n) => n ** 2)
let power_2 = numbers.map(n => n ** 2) // Lambda Expression

// console.log(power_2);
// 5. IIFE (Immediately Invoked Function Expression)
// (function (number_1, number) {
//     console.log(number_1 - number);
// })(20, 10)

// const subtract = function (number_1, number) {
//     console.log(number_1 - number);
// }
// subtract(20, 10)
