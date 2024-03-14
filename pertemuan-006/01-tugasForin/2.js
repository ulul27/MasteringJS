let pendapatanBulanan = {
  januari: 1000,
  februari: 3000,
  maret: 7000
}
let cuan = 0

for (let data in pendapatanBulanan) {
  // console.log(pendapatanBulanan[data]);
  cuan += pendapatanBulanan[data]
}
console.log(cuan);