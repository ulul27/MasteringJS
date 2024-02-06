let grades = [60, 70, 80, 90, 20]

let result = grades.map(value => {
  if (value > 69) {
    return 'LULUS'
  } else {
    return 'MENGULANG'
  }
})

console.log(result);