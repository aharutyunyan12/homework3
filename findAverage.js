function findAverage(arr) {
    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
    let result = sum / arr.length
    return result
}

const result = findAverage([10, 20, 30, 40, 50])

console.log(result)