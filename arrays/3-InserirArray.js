let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Inserindo elemento no final do array
numbers[numbers.length] = 10

// Utilizando o método PUSH
numbers.push(11)
numbers.push(12, 13)

console.log(numbers);


// Iserindo elemento no inicio do array
Array.prototype.insertFirstPosition = function (value) {
    for(let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1]
    }

    this[0] = value
}

numbers.insertFirstPosition(-1)

console.log(numbers);

// Utilizando o método UNSHIFT (a lógica interna tem o mesmo comportamento acima)
numbers.unshift(-2)
numbers.unshift(-4, -3)

console.log(numbers);