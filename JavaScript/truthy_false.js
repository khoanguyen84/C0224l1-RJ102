/**
 * truthy và falsy
 * sẽ convert các kiểu dữ liệu về kiểu boolean
 * 0 (number) => false
 * false (boolean) => false
 * '' (string) => false
 * Null (object) => false
 * undefined (undefined) => false
 * NaN => false 
 */

// let number = -10

// if(number) {
//     console.log('not equal zero');
// }
// else {
//     console.log('equal zero');
// }

// let name = 'Khoa'
// if(name) {
//     console.log(name);
// }
// else {
//     console.log('No name');
// }

// let jobList = []

// if(jobList.length) {
//     console.log(jobList);
// }
// else {
//     console.log('job list is empty');
// }

// optional chain ?.

let product = null

console.log(product?.title);

// console.log(Object.keys(product));
// if(Object.keys(product).length) {
//     console.log(product.title);
// }
// else {
//     console.log('product is empty');
// }

