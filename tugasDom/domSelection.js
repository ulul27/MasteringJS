// 1. document.getElementById()

// let judul = document.getElementById('judul')
// judul.style.color = 'red'
// judul.style.backgroundColor = 'yellow'
// judul.innerHTML = 'ulul'

// console.log(judul);


// 2. document.getElementByTagName()

// let p = document.getElementsByTagName('p')

// bisa ngloping jg ternyata di dom

// cara 1
// let i = 0

// for (let r of p) {
//   // console.log('tes ', p[i]);
//   console.log(i);
//   console.log('hasil', i % 2);
//   console.log('hasil 2', i % 2 == 0);
//   // console.log('ini', r);

//   if (i % 2 == 0) {
//     console.log('if');
//     r.style.backgroundColor = 'lightblue'
//   } else {
//     console.log('else');
//     r.style.backgroundColor = 'yellow'
//   }
//   i++
// }

// cara 2 Manual for loop

// let i = 0
// console.log(p.length);
// console.log(i < p.length);

// for (let i = 0; i < p.length; i++) {
//   console.log('ini', i);
//   if (i % 2 == 0) {
//     p[i].style.backgroundColor = 'lightblue'
//   } else {
//     p[i].style.backgroundColor = 'yellow'
//   }
// }

//  tugas
// 1. pakai tag buat variabel h1 ubah font size 50px
// 2. pKAI class name ambil kelas p1 terus ubah isinya jadi kata 'di ubah dari javascript'
// 3. pakai tag buat variabel li ambil tag pakai li ubah warna tulisan pertama dan ketiga merah, dua kuning