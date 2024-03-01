/**
 * callback = gọi lại
 * 1. phải là 1 hàm
 * 2. hàm này phải được truyền vào 1 hàm khác (thông qua parameter)
 * 3. hàm này phải được thực thi
 */

// let numbers = [4, 7, 3, 9, 10]
// function power (n) {
//     return n ** 2;
// }
// let power_2 = numbers.map(power)

// console.log(power_2);

// const callback = function (n_1, n_2) {
//     console.log('n 1 >>', n_1);
//     console.log('n 2 >>', n_2);
//     return n_1 + n_2
// }

function useCallback(param) {
    console.log(param(5, 10));
}

// useCallback(callback)
useCallback(function (n_1, n_2) {
    console.log('n 1 >>', n_1);
    console.log('n 2 >>', n_2);
    return n_1 + n_2
})