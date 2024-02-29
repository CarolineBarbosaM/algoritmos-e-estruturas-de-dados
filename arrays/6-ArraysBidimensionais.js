// Array Bidimensionais ou Matrizes
let averageTempDay = []
averageTempDay[0] = [71, 75, 79, 79, 81, 81]
averageTempDay[1] = [81, 79, 75, 75, 73, 72]

console.log(averageTempDay);

// Podemos montar a matriz acima também da seguinte forma:

//Dia 1
averageTempDay[0] = []
averageTempDay[0][0] = 72
averageTempDay[0][1] = 75
averageTempDay[0][2] = 79
averageTempDay[0][3] = 79
averageTempDay[0][4] = 81
averageTempDay[0][5] = 81

//Dia 2
averageTempDay[1] = []
averageTempDay[1][0] = 81
averageTempDay[1][1] = 79
averageTempDay[1][2] = 75
averageTempDay[1][3] = 75
averageTempDay[1][4] = 73
averageTempDay[1][5] = 73

console.log(averageTempDay);

// Interando elementos de array Bidimensionais

function printMatrix(myMatrix) {
    for(let i = 0; i < myMatrix.length; i++) {
        for(let j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j]);
        }
    }
}

printMatrix(averageTempDay)

// Você pode exibir usando o table
console.table(averageTempDay)