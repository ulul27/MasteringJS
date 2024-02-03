let calculator = {
	result : 0,
	add (a,b) {
      this.result = a + b
	},
	subtract (a,b) {
		this.result = a - b
	},
	multiply(a,b) {
		this.result = a * b
	},
	devide(a,b) {
		this.result = a / b
	}
}

calculator.add(1,2)
console.log(calculator.result)


calculator.subtract(1,2)
console.log(calculator.result)

calculator.multiply(1,2)
console.log(calculator.result)

calculator.devide(1,2)
console.log(calculator.result)