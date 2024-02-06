let words = ['ini', 'ibuku', 'loh', 'budi']

let worder = words.map(data => {
  if (data.length > 3) {
    return data.length
  } else {
    return data
  }
})

console.log(worder);