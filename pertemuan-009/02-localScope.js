// function first() {
//   let firstVariable = 'first'
// }

// function second() {
//   let secondVariable = 'second'
// }

// first()
// second()

// console.log(firstVariable);
// console.log(secondVariable);


function first() {
  let firstVariable = 'first'

  function second() {
    console.log(firstVariable);
    let secondVariable = 'second'
  }
  console.log(second());
}


console.log(first());

console.log(secondVariable);