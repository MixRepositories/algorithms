const array = [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 15]
let count = 0

function binarySearch (array, item) {
  let start = 0,
    end = array.length,
    middle,
    position = -1,
    found = false

  while (!found && start <= end) {
    count++
    middle = Math.floor((start + end) / 2)
    if (item === array[middle]) {
      found = true
      position = middle
    } else if (item < array[middle]) end = middle - 1
    else if (item > array[middle]) start = middle + 1
  }

  return position
}

console.log('index:', binarySearch(array, 7))
console.log('count:', count)
