// Умова 1
// Написати функцію checkValueInArray, яка приймає масив чисел і ключ(число), і повертає булеве значеня залежно від того чи присутній в масиві ключ.

array = [1, 23, 45, 76, 78, 98, 33, 442, 23, 23, 20, 22]

function checkValueInArray(array, value) {
  return array.includes(value)
}

console.log(checkValueInArray(array, 1));

// Умова 2
// Написати функцію, яка приймає масив з числами і повертає true, якщо в масиві є два однакових числа поспіль, інакше повертає false. Якщо масив порожній також повертає false.

// в - 1
array2 = [1, 23, 45, 45, 76, 78, 98, 33, 442, 23, 20, 22]

function checkRepeatNumberRow(array2) {
  for (let index = 0; index < array2.length; index++) {
    if (array2[index] === array2[index + 1]) {
      return true;
    } 
  }
  return false;
}
console.log(checkRepeatNumberRow(array2));

// в - 2
array3 = [1, 23, 45, 76, 78, 98, 33, 442, 23, 20, 22, 22]

function checkRepeatNumberRow(array3) {
  for (let index = 0; index < array3.length; index++) {
    if (array3.indexOf(array3[index]) === array3.indexOf(array3[index + 1])) {
      return true;
    }
  }
  return false;
}

console.log(checkRepeatNumberRow(array3));