function countVowels(string) {
    let count = 0
    for(let idx = 0; idx < string.length; idx++) {
        switch (string[idx]) {
            case 'a': 
                count++
            break;
            case 'e':
                count++
            break;
            case 'i':
                count++
            break;
            case 'o':
                count++
            break;
            case 'u':
                count++
            break;                
        }
    
    }
    return count
}

const result = countVowels("Hello World")

console.log(result)