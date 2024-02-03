function hitungPanjangKata(arrayString) {

  let panjangKata = {}

  for (let element of arrayString) {
    panjangKata[element] = element.length
  }

  // console.log(panjangKata);
  return panjangKata

}


console.log(hitungPanjangKata(['ini', 'budi', 'anieh', 'saidth']));