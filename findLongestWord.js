function findLongestWord(str) {
    let longest = ""
    let arr = str.split(' ')
    for (let word of arr) {
        if (word.length >= longest.length) {
            longest = word
        }
    }
    return longest
}

const result = findLongestWord("The quick brown fox jumps over the lazy dog")

console.log(result)