/**
 * pass by value = truyền tham trị => các kiểu dữ liệu: number, string, boolean,..
 * pass by reference = truyền tham chiếu => các kiểu dữ liệu: array, object, function
 */

// let number_1 = 10;
// let number_2 = number_1;
// number_2 = 100
// console.log(number_1);
// console.log(number_2);

let jobList_1 = ['Java', "ReactJS", "Angular"]
// // let jobList_2 = ['C#', "ReactJS", "Angular"]
let jobList_2 = [...jobList_1, 'VueJS']
jobList_2[0] = "C#"
console.log('jobList 1 >>', jobList_1);
console.log('jobList 2 >>', jobList_2);

// trong object key (property) value pair
let student_1 = {
    name: "Khoa",
    age: 18,
    gender: true
}

// let student_2 = { ...student_1 }
// student_2.name = 'Thịnh'

let student_2 = {
    ...student_1,
    name: 'Thịnh',
    email: 'thinh@gmail'
}
// student_2['name'] = 'Thịnh'

// console.log('student 1 >> ', student_1);
// console.log('student 2 >> ', student_2);