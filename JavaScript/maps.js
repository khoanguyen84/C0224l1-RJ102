// nested array (mảng trong mảng ~ mảng hai chiều/nhiều chiều)
let huy = new Map([
    ['ho-ten', 'huy'],
    ['[1, 2, 3]', 'hobbies']
])
// console.log(huy.get('ho-ten'));
// console.log(huy.get('[1, 2, 3]'));
console.log(huy.keys());
console.log(huy.entries());

// let studentList = [
//     { id: 1, 'ho-ten': 'Khoa' },
//     { id: 2, 'ho-ten': 'Hải' }
// ]
// let studentList = [
//     [1, 'Khoa'],
//     [2, 'Hải']
// ]
let studentList = new Map([
    ['ho-ten', 'khoa']
])
console.log(studentList.get('ho-ten'))