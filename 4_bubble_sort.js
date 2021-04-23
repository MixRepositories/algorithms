/*
* Алгоритм методом пузырька
* Проходим по масссиву и каждый последующий элемент с больщим знаением меняем местами с предыдущим
* */
const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32] // count = 676
let count = 0

function bubbleSort (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      count++
      if (array[j + 1] < array[j]) {
        let tmp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tmp
      }
    }
  }
  return array
}

console.log('sorted array:', bubbleSort(array))
console.log('count:', count)
