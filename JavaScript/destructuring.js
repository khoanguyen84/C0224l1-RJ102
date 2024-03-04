// let jobList = ["Java", "ReactJS", "VueJS"]
// let java = jobList[0]
// let reactJS = jobList[1]
// let vueJS = jobList[2]

// let [java, , vueJS] = jobList

// console.log(jobList);
// console.log(java, vueJS);

// useState() => mảng []

// const result = useState()
// result[0]
// result[1]

// const [age, setAge] = useState()

const student = {
    name: 'Khoa',
    age: 18,
    gender: 'Male',
    getName: function () {
        return this.name
    }
}
// const { name, age, gender, getName } = student
const { age, getName, gender: gioiTinh } = student

console.log(gioiTinh);