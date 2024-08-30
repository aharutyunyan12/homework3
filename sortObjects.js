function sortObjects(arr, str) {
    return arr.sort(( { [str]: a }, { [str]: b } ) => a - b)
}

const result = sortObjects(
    [
    { name: "Zara", salary: 50000 },
    { name: "John", salary: 70000 },
    { name: "Doe", salary: 60000 },
    ],
    "salary"
    )

console.log(result)