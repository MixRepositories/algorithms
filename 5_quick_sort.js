/* Сортировка Хоара (Быстрая сортировка)
* 1) пишем случай выхода из рекурсии (когда дляна массива будет меньше или равен 1)
* 2) Определяемс середину массива
* 3) Создаем два массива для больших и меньших значений
* 4) Проходим по входному массиву и распределяем по массивам значения (больше среднего или меньше)
* 5) Вызываем рекурсеонно функцию для массивов с большеми и меньшеми значениями
* 6) Соединяем результат в один массив
* 7) возсращаем отсортированнй массив из функции
* */
const array = [0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23] // 315
let count = 0

function quickSort (array) {
  if (array.length <= 1) return array

  let middle = Math.floor(array.length / 2)
  const less = []
  const more = []

  for (let i = 0; i < array.length; i++) {
    count++
    if (i === middle) continue

    if (array[middle] < array[i]) more.push(array[i])
    else less.push(array[i])
  }
  return [...quickSort(less), array[middle], ...quickSort(more)]
}

console.log('sorted array:', quickSort(array))
console.log('count:', count)
