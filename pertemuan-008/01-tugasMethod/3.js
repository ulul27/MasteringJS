let numbers = [1, 2, 3, 4, 5]

let numbers2 = numbers.map(value => {
  // return value * value * value
  return value ** 5
})

console.log(numbers2);