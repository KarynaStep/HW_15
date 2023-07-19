// Умова 1
// Написати функцію checkValueInArray, яка приймає масив чисел і ключ(число), і повертає булеве значеня залежно від того чи присутній в масиві ключ.

array = [1, 23, 45, 76, 78, 98, 33, 442, 23, 23, 20, 22]

function checkValueInArray(array, value) {
  return array.includes(value)
}

console.log(checkValueInArray(array, 1));

// Умова 2
// Написати функцію, яка приймає масив з числами і повертає true, якщо в масиві є два однакових числа поспіль, інакше повертає false. Якщо масив порожній також повертає false.

array = [1, 23, 45, 76, 78, 98, 98, 33, 442, 23, 20, 22]

function checkRepeatNumberRow(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === array[index + 1]) {
      return true;
    } 
  }
  return false;
}

console.log(checkRepeatNumberRow(array));