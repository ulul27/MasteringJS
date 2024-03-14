// function tambah(a, b) {
//   let total = a + b
//   return total
// }

// kedua

// console.log(tambah(1, 2));

// function sayHello(firstName, lastName) {
//   console.log(`Hello ${firstName} ${lastName
//   }`);
// }

// sayHello('Ulul', 'fadhli')

// keetiga

function highscore(score = 75) {

  if (score >= 90) {
    return 'A'
  } else if (score >= 80) {
    return 'B'
  } else if (score >= 70) {
    return 'C'
  } else if (score >= 60) {
    return 'D'
  }
  // else {
  //   return 'E'
  // }

}

let tampung = highscore()
console.log(tampung);

// keempat

// function isContains(array, searchVal) {
//   for (let Element of array) {
//     if (Element == searchVal) {
//       return true
//     }
//   }
//   return false

// }

// console.log(isContains([1, 2, 3, 4, 5, 6, 7, 8], 11));

// kelima

// function sayHello(firstName, midleName = 'default1', lastName = 'default2') {
//   console.log(firstName);
//   console.log(midleName);
//   console.log(lastName);
// }

// sayHello('ulul')
// sayHello('', '', 'fadhli')