const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]; //cria um Array com diversos números repetidos
function valoresUnicos(arr){ // cria uma função chamada 'valoresUnicos' 
    const mySet = new Set(arr);// cria um novo array como nome 'mySet',que receberá um new Set 

    return [...mySet];//retorna o array 'mySet'
}

console.log (valoresUnicos(meuArray));//executa a função 'valoresUnicos' no array 'meuArray' no console