let toko = {
  sabun: 'lifeboy',
  beras: 'cap walet 5kg',
  sirup: 'abc orage squash',
  kecap: 'THG'
}

let jumlahKey = 0

for (let data in toko) {
  jumlahKey++
}

console.log(jumlahKey);