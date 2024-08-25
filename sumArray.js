function sumArray(array) {
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue)
    return sum
}

const result = sumArray([1, 2, 3, 4, 5])

console.log(result)