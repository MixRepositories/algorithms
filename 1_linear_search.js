const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let count = 0

function searchingValue (array, item) {
  for (let i = 0; i < array.length; i++) {
    count++
    if (item === array[i]) return i
  }
}

console.log('index:', searchingValue(array, 9))
console.log('count:', count)
