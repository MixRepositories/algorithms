const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let count = 0

function searchingValue (array, searchValue) {
  for (let i = 0; i < array.length; i++) {
    count++
    if (array[i] === searchValue) return i
  }
}

console.log('index:', searchingValue(array, 10))
console.log('count:', count)
