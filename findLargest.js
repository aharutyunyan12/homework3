function findLargest(arr){
    let min = -Infinity
    for (let idx = 0; idx < arr.length; idx++){
        if (arr[idx] > min){
            min = arr[idx]
        }
    }
    return min
}

const result = findLargest([-10, -5, 0, 5, 10])

console.log(result)