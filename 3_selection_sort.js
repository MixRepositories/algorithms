/* Сортировка ВЫБОРОМ O(n*n)
* Пробегаем по всему массиву и ищем минимальное значение
* Меняем его с первым элементом
* Пробегаем по моссиву со второго (следующего) элемента, ищем наименьший элемент
* Меняем их местами
* Повторяем процедуру
* */

const array = [0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23] // count = 1326
let count = 0

function selectionSort (array) {
  for (let i = 0; i < array.length; i++) {
    let indexMinElem = i
    for (let j = i + 1; j < array.length; j++) {
      count++
      if(array[indexMinElem] > array[j]) indexMinElem = j
    }
    const tmp = array[indexMinElem]
    array[indexMinElem] = array[i]
    array[i] = tmp
  }
  return array
}

console.log('sorted array:', selectionSort(array))
console.log('count:', count)
