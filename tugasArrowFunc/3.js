// function hitungRataRata(nilai) {

//   let total = 0
//   // let rata2 = nilai.length

//   for (let hitung of nilai) {
//     total += hitung
//   }
//   return total / nilai.length
//   // console.log(total / nilai.length); // penganti return karena ingin ditampilkan di terminal datanya

// }


// console.log(hitungRataRata([1, 2, 3, 4]));

const hitungRataRata = nilai => {
  let total = 0

  for (let hitung of nilai) {
    total += hitung
  }
  return total / nilai.length
}

console.log(hitungRataRata([1, 2, 3, 4]));