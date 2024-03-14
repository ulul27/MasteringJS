function hitungKuadrat(arr) {
  let kuadrat = []

  for (let nilai of arr) {
    kuadrat.push(nilai * nilai)
    // console.log(nilai * nilai);
  }
  return kuadrat
}

console.log(hitungKuadrat([1, 2, 3, 4, 5]));