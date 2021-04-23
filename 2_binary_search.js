/*
* Бинарный поиск работает только с отсортированным массивом
* Принцип:
* 1) Делим массив пополам
* 2) Проверям искомое значение больше или меньше текщего
* 3) Отсекаем лишнюю часть
* 4) Повторяем до того пака старт и стоп не сойдутся
* */
const array = [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 15]
let count = 0

function binarySearch (array, item) {
  let position = -1
  let start = 0
  let end = array.length
  let isSearching = true
  let meddium

  while (isSearching && start <= end) {
    meddium = Math.floor((end + start) / 2)
    count++
    if (array[meddium] === item) {
      isSearching = false
      position = meddium
    } else if (array[meddium] < item) start = meddium + 1
    else end = meddium - 1
  }
  return position
}

console.log('index:', binarySearch(array, 5))
console.log('count:', count)
