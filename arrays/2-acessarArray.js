const dayWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

//Acessando os elementos do array
for(let i = 0; i < dayWeek.length; i++) {
    //console.log(dayWeek[i]);
}

// EXEMPLO:

const fibonnaci = []
fibonnaci[1] = 1
fibonnaci[2] = 1

for(let i = 0; i < 20; i++) {
    fibonnaci[i] = fibonnaci[i - 1] + fibonnaci[i - 2];
}

for(let i = 0; i < fibonnaci.length; i++) {
    console.log(fibonnaci[i]);
}

// Podemos fazer assim também para exibir todo o array
console.log(fibonnaci);