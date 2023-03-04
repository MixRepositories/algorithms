/*
* Алгоритм методом пузырька
* Проходим по масссиву и каждый последующий элемент с больщим знаением меняем местами с предыдущим
* */
const array = [0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23] // count = 2704
const array2 = [0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23] // count = 2704

function bubbleSort(array) {
  let count = 0

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      count++
      const nextJ = j + 1
      if (array[nextJ] < array[j]) {
        const tmp = array[nextJ]
        array[nextJ] = array[j]
        array[j] = tmp
      }
    }
  }
  console.log('bubbleSort count:', count)
  return array
}

function bubbleSort2(array) {
  let count = 0
  let length = array.length
  while (length !== 0) {
    let maxIndex = 0
    for (let i = 1; i < length; i++) {
      count++
      if (array[i - 1] > array[i]) {
        const tmp = array[i]
        array[i] = array[i - 1]
        array[i - 1] = tmp
        maxIndex = i
      }
    }
    length = maxIndex
  }

  console.log('bubbleSort2 count:', count)
  return array
}


console.log('sorted array bubbleSort:', bubbleSort(array))
console.log('sorted array bubbleSort2:', bubbleSort2(array2))
