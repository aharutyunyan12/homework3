function toTitleCase(str) {
    return str
    .split(' ')
    .map((char) => char.charAt(0).toUpperCase() + char.slice(1).toLowerCase())
    .join(' ')
}

const res = toTitleCase("hello world")

console.log(res)