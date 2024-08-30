function flattenArray(arr) {
    return arr.flat(Infinity)
}

const result = flattenArray([[1, 2, [3]], [4, 5], [6]])

console.log(result)