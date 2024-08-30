function mostFrequentItem(arr) {
    let maxCount = 0
    let mostFrequentItem = 0
    for (let item of arr) {
        let count = 0
        for (let idx = 0; idx < arr.length; idx++) {
            if (item == arr[idx]) {
                count++
            }
        }
        if (count > maxCount) {
            maxCount = count
            mostFrequentItem = item
        }
    }
    return mostFrequentItem
}

const result = mostFrequentItem([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])

console.log(result)