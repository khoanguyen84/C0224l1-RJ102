const numbers = [65, 44, 12, 4];

let numberPower = numbers.map(function(value){
    let button = `<button>${value}</button>`
    return button;
})

console.log(numberPower);