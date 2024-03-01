let name = 'Như'
let gender = false
let married = true

// Mr.Khoa Ms.Như Mrs.Như
// if (gender == true) {
//     console.log('Mr.' + name);
// }
// else if (married == true) {
//     console.log('Mrs.' + name);
// }
// else {
//     console.log('Ms.' + name);
// }

/**
 * Ternary Operator (toán tử 3 ngôi)
 */
// gender == true ? console.log('Mr.' + name) :
//     married == true ? console.log('Mrs.' + name) : console.log('Ms.' + name);

// console.log((gender == true ? 'Mr.' : married == true ? 'Mrs' : 'Ms.') + name);
console.log(`${gender == true ? 'Mr' : married == true ? 'Mrs' : 'Ms'}. ${name}`);