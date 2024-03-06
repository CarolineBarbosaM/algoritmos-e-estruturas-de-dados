//ES6
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(numbers);

//Interando com @@Iterator
let interator = numbers[Symbol.iterator]();
console.log(interator.next().value);
console.log(interator.next().value);
console.log(interator.next().value);
console.log(interator.next().value);
console.log(interator.next().value);

for(const n of interator) {
    console.log(n);
}

//Interando com entries, keys e array
let aEntries = numbers.entries();
console.log(aEntries.next().value);
console.log(aEntries.next().value);
console.log(aEntries.next().value);

for(const n of aEntries) {
    console.log(n);
}

const aKeys = numbers.keys();
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());

const aValues = numbers.values();
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());

//Usando o From
let numbers2 = Array.from(numbers)
console.log(numbers2);

let evens = Array.from(numbers, x => (x % 2 == 0));
console.log(evens);

//Usando o Array.of
let numbers3 = Array.of(1)
let numbers4 = Array.of(1, 2, 3, 4, 5, 6) // IGUAL: let numbers4 = [1, 2, 3, 4, 5, 6]

console.log(numbers3);
console.log(numbers4);

let numbersCopy = Array.of(...numbers4)
console.log(numbersCopy);

//Usando o Fill
console.log(numbersCopy.fill(0));
console.log(numbersCopy.fill(2, 1));
console.log(numbersCopy.fill(1, 3, 5));

let ones = Array(6).fill(1);
console.log(ones);

//Usando o copyWithin
let copyArray = [1, 2, 3, 4, 5, 6]
console.log(copyArray);

copyArray.copyWithin(0, 3);
console.log(copyArray);

copyArray = [1, 2, 3, 4, 5, 6]
copyArray.copyWithin(1, 3, 5)
console.log(copyArray);