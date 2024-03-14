let orang = {
  nama: 'ulul',
  alamat: 'kudus',
  usia: 35,
  'tempat-lahir': 'kudus'
}

for (let data in orang) {
  // console.log(data);
  console.log(`${data} : ${orang[data]}`);

  // console.log(`Nama: ${orang.nama}, alamat: ${orang.alamat}, usia: ${orang.usia}, tempat-lahir:${orang['tempat-lahir']}`);
}