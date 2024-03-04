function sum(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i]
    }
    return total;
}

function times(...rest) {
    let total = 1;
    for (let i = 0; i < rest.length; i++) {
        total *= rest[i]
    }
    return total;
}

const jobList = ["Java", 'ReactJS', "Angular"]

// module.exports = [sum, times]
module.exports = { sum, times, jobList }