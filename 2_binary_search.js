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
let recursCount = 0

function binarySearch (array, item) {
  let middle,
    start = 0,
    end = array.length,
    flagSearch = true,
    position = -1

  while (flagSearch && start <= end) {
    count++
    middle = Math.floor((start + end) / 2 )
    if (array[middle] === item) {
      flagSearch = false
      position = middle
    }

    if (array[middle] < item) {
      start = middle + 1
    } else {
      end = middle - 1
    }
  }
  return position
}

function recursBinarySearch (array, item, start = 0, end = array.length) {
  recursCount++
  const middle = Math.floor((start + end) / 2 )
  if (array[middle] === item) return  middle
  if (start === end) return -1

  if (array[middle] < item) return recursBinarySearch(array, item, middle + 1, end)
  else return recursBinarySearch(array, item, start, middle- 1)
}


const searchValue = 12
console.log('--------------------------------------------')
console.log('index:', binarySearch(array, searchValue))
console.log('count:', count)
console.log('--------------------------------------------')
console.log('recurs index:', recursBinarySearch(array, searchValue))
console.log('recurs count:', recursCount)
console.log('--------------------------------------------')

