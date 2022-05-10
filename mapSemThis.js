function mapSemThis(arr){
    return arr.map(function(item){
        return item * 10;
    });
} // cria a função que ira multiplicar cada item do array por 10

const numeros = [1, 2, 3, 4, 5]; // cria o array comos itens

console.log(numeros); // exibe os itens do array

console.log(mapSemThis(numeros)); // exibe os itens do array depois de mapeado com a função
