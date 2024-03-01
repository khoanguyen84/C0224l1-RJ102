// function sum(number_1, number_2) {
//     console.log('number 1 >> ', number_1);
//     console.log('number 2 >> ', number_2);
//     console.log(number_1 + number_2);
// }
// function sum(number_1, number_2 = 20) {
//     console.log('number 1 >> ', number_1);
//     console.log('number 2 >> ', number_2);
//     console.log(number_1 + number_2);
// }

// sum(10, 40)

// function sum() {
//     let total = 0;
//     for(let i = 0; i < arguments.length; i++){
//         total += arguments[i]
//     }
//     console.log('total: ', total);
// }

function sum(text, ...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i]
    }
    console.log(`${text}: ${total}`);
}


sum('total', 5, 3, 4, 56, 3, 2, 5, 3, 2, 2, 3, 5, 5, 5)
sum('tổng cộng', 5, 3, 4, 56, 3, 2, 5, 3, 2, 2, 3, 5, 5, 5)