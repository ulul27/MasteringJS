let pegawai = {
  nip: 1345,
  usia: 45,
  nama: 'kusmanto',
  alamat: 'pedak klumpit santren kudus',
  jabatan: 'kepala devisi pembangunan'
}

for (let data in pegawai) {
  console.log(`${data} : ${pegawai[data]}`);
}