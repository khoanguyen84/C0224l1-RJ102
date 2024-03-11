// console.log(1)
// setTimeout(function print_number_2_1() {
//     console.log(2.1);
// }, 8000);

// setTimeout(function print_number_2_2() {
//     console.log(2.2);
// }, 4000);


// console.log(3);

setTimeout(function print_number_2_1() {
    console.log(1)
    console.log(2.1);
    ///...
    setTimeout(function print_number_2_2() {
        console.log(2.2);
        console.log(3);
        setTimeout(function print_number_2_2() {
            ///....
            console.log(4);
        }, 4000);
    }, 4000);
}, 8000);




