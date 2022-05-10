let linhas = parseInt(gets());

function gets(){
    const readline = require('readline-sync')
    const limit = readline.question()
    return limit
}

for (let i = 1; i <= linhas; i++) {
    let X = i;
    let Y = Math.pow(i, 2);
    let Z = Math.pow(i, 3);
    console.log(X,Y,Z);
}