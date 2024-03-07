let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(numbers);

//Indice do primeiro argumento do elemento passado
console.log(numbers.indexOf(10));

//Indice do ultimo elemento encontrado do elemento passado
console.log(numbers.lastIndexOf(100));


//Metodos Find e FindIndex
function multipleOf13(element, index, array) {
    return element % 13 == 0;
}

//Devolve o primeiro valor do array que satisfaça a condição
console.log('Find: ' + numbers.find(multipleOf13));

//Devolve o indice do primeiro valor do array que satisfaça a condição
console.log('FindIndex: ' + numbers.findIndex(multipleOf13));


//Metodo Includes
console.log(numbers.includes(15));
console.log(numbers.includes(20));

let numbers2 = [7, 6, 5, 4, 3, 2, 1]
console.log(numbers2.includes(4, 5)); //passando tambem o indice