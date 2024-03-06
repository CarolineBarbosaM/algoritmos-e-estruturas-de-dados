// ES5
/*function isEven(x) {
    console.log(x);
    return x % 2 === 0 ? true : false;
}*/

//ES6
const isEven = x => x % 2 === 0;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

console.log(numbers);

//Função Every
console.log('Fuction Every: ' + numbers.every(isEven));

//Função Some
console.log('Fuction Some: ' + numbers.some(isEven));

//Função forEach
console.log('Function ForEach: ' + numbers.forEach(x => console.log(x % 2 === 0)));

//Funções Map e Filter
const myMap = numbers.map(isEven)
console.log('Function Map: ' + myMap);

const evenNumbers = numbers.filter(isEven)
console.log('Function Filter: ' + evenNumbers);

//Função Reduce
console.log('Function Reduce: ' + numbers.reduce((previous, current) => previous + current));

//ES6

//Interando com for...of
for(const n of numbers) {
    console.log(n % 2 === 0 ? 'even': 'odd');
}
