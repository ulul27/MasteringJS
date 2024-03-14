let num1 = 10;
let num2 = 12;
let nilai = 0;

// let lebihNum1 = num1 > num2;
// let lebihNum2 = num2 > num1;
// let samaBesar = num1 === num2;

// if (num1 > num2) {
//   nilai = 1
// }
// // console.log(num1 > num2);

switch (true) {
  // num1 > num2 = hasilnya num1 lebih besar dari num2
  case num1 > num2:
    console.log('Num1 lebih besar dari num2');
    break;
    // num2 > num1 = hasilnya num2 lebih besar dari num1
  case num2 > num1:
    console.log('Num2 lebuh besar dari num1');
    break;
  default:
    console.log('Num1 sama dengan num2');
}