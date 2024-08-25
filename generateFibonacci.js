function generateFibonacci(n) {
    let number1 = 0
    let number2 = 1
    let array = []
    let nextNumber = 0
    for (let i = 0; nextNumber < n; i++) {
        array.push(number1)
        nextNumber = number1 + number2
        number1 = number2
        number2 = nextNumber
    }
    array.push(number1)
    return array
}
const result = generateFibonacci(15)

console.log(result)