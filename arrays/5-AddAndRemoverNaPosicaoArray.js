let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numbers);

// Removendo elemento na posição especificada
numbers.splice(5, 1)
console.log(numbers);

// Inserindo elemento na posição especificada
numbers.splice(5, 0, 2, 3, 4) // indice, quantidade a remover, valores a serem inseridos
console.log(numbers);
