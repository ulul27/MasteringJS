// 4. document.querySelector()

// let a = document.querySelector('#a a')

// a.style.color = 'green'
// a.style.fontSize = '30px'

// console.log(a);

// let b = document.querySelector('#b li:nth-child(2)')

// b.style.backgroundColor = 'orange'

// console.log(b);


// 5. document.querySelectorAll()
// let p = document.querySelectorAll('p')


// for (let i = 0; i < p.length; i++) {
//   console.log('ini coba', p[i]);
//   if (i == 1) {
//     p[i].style.backgroundColor = 'blue'
//   } else {
//     p[i].style.backgroundColor = 'yellow'
//   }
// }

// console.log(p)

// 6. atribute

let j = document.querySelector('#judul')

j.setAttribute('class', 'container')

console.log(j);
// buat tau isi atribut

// let id = j.getAttribute('id')

// console.log(id);


// 7. class list

let g = document.querySelector('#judul')

g.classList.add('content')
g.classList.remove('container')
console.log(g);