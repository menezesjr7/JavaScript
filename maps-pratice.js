const dobro = {
    value: 2,
}//crio um objeto com o nome dobro e valor 2

const triplo = {
    value: 3,
}//crio um objeto com o nome triplo e valor 3

const quadruplo = {
    value: 4,
}//crio um objeto com o nome quadruplo e valor 4

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
     
} // cria a função mapComThis, que vai pegar o nome do objeto, e multiplicar seu valor, por cada item do array

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// cria o array

console.log('this => dobro', mapComThis(numeros, dobro)); //joga na tela o resultado da função mapComThis com o objeto dobro

console.log('this => triplo', mapComThis(numeros, triplo)); //joga na tela o resultado da função mapComThis com o objeto triplo

console.log('this => quadruplo', mapComThis(numeros, quadruplo)); //joga na tela o resultado da função mapComThis com o objeto quadruplo