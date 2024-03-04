/**
 * ECMA Script 2015 = ES6
 */

/**
 * convention = 
 *  PascalCase = TongHaiSo
 *  camelCase = tongHaiSo
 *  snake-case = tong-hai-so
 *  */

// function Student(fullname, age, gender) {
//     this.fullname = fullname;
//     this.age = age;
//     this.gender = gender;
//     this.getInfo = function() {
//         console.log(`Name: ${this.fullname}; age: ${this.age}; gender: ${this.gender}`);
//     }
// }

class Student {
    constructor(fullname, age, gender) {
        this.fullname = fullname
        this.age = age;
        this.gender = gender;
    }
    getInfo() {
        console.log(`Name: ${this.fullname}; age: ${this.age}; gender: ${this.gender}`);
    }
}

let luan = new Student("Luân", 18, 'Male')
let ngoc = new Student("Ngọc", 18, "Female")
luan.getInfo()
ngoc.getInfo()