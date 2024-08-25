function reverseString(string) {
    let array = string.split('')
    let newArray = array.reverse()
    let result = newArray.join('')
    return result
}

const result = reverseString("JavaScript")
console.log(result)