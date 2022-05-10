function filterPares(arr){
    return arr.filter(callbackPares)
} // cria a função que irá pegar apenas os pares

function callbackPares(item){
    return item % 2 === 0;
}// cria o callback que só pegará os numeros pares

function filterImpares(arr){
    return arr.filter(callbackImpares)
} // cria a função que irá pegar apenas os impares

function callbackImpares(item){
    return item % 2 !== 0;
}// cria o callback que só pegará os numeros ímpares

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log (filterPares(numeros));

console.log (filterImpares(numeros));

