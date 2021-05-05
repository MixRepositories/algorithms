/*
* Алгоритм методом пузырька
* Проходим по масссиву и каждый последующий элемент с больщим знаением меняем местами с предыдущим
* */
const array = [0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23] // count = 2704
let count = 0

function bubbleSort (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      const nextJ = j + 1
      if (array[nextJ] < array[j]) {
        const tmp = array[nextJ]
        array[nextJ] = array[j]
        array[j] = tmp
      }
    }
  }
  return array
}

console.log('sorted array:', bubbleSort(array))
console.log('count:', count)
