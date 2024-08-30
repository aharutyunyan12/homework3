function isPalindrome(str) {
    let arr = str
    .toLowerCase()
    .split('')

    let filteredArray = []
    const punctuation = " .,/#!$%^&*;:{}=\-_`~()"

    for (const item of arr) {
        filteredArray = arr.filter((char) => !punctuation.includes(char))
    }

    let copyFilteredArray = filteredArray.map((char) => char)

    let reversedArray = filteredArray.reverse()
    
    const filteredString = copyFilteredArray.join('')
    const reversedString = reversedArray.join('')
    

    return reversedString == filteredString
}

const result = isPalindrome("A man, a plan, a canal, Panama")

console.log(result)