function findIntersection(arr1 ,arr2) {
    return arr1.filter((item) => arr1.includes(item) == arr2.includes(item))
}

const result = findIntersection([1, 2, 3, 4], [3, 4, 5, 6])

console.log(result)