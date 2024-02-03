function Angkot(driver, direction, human, cash) {
  this.sopir = driver;
  this.jurusan = direction;
  this.penumpang = human;
  this.kas = cash;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang
  }
}

let angkot1 = new Angkot('Nanang', ['kota', 'gebog'], [], 0)

let angkot2 = new Angkot('sandika', ['bae', 'terminal kudus'], [], 0)

// console.log(this.penumpangNaik);