function validaArray(arr,num){ //cria a função 'validaArray', que recebe um array e um número
    try{//o try vai fazer os testes para verificar possíveis erros.
        if (!arr && !num) throw new ReferenceError("Envie os parâmetros");// o if faz a verificação de que se o array e o número possuem algum valor ou não, com a negação '!'. Caso o array e o número estejam vazios, o 'trhow' chama o erro, que por sua vez foi referenciado como 'ReferenceError, apresentando uma string com a mensagem que pede para os parâmetros serem enviados. O 'ReferenceErros', assim como outros, são erros personalizados do JavaScript.
        if (typeof arr !== 'object') throw new TypeError ('Array precisa ser do tipo object!');// esse if faz a verificação se o array 'arr'é do tipo object.ELe faz isso usando o termo 'typeof' e compara com o '!==' que verifica se é diferente. Se realmente for diferente do tipo 'object', o 'throw' chama o erro, denominado 'TypeError', também um erro personalizado do JavaScript, e apresenta a mensagem do erro, com uma string.
        if (typeof num !== 'number') throw new TypeError ('O número precisa ser do tipo number!');// esse if faz a verificação se o número 'num'é do tipo numer.ELe faz isso usando o termo 'typeof' e compara com o '!==' que verifica se é diferente. Se realmente for diferente do tipo 'number', o 'throw' chama o erro, denominado 'TypeError', também um erro personalizado do JavaScript, e apresenta a mensagem do erro, com uma string.
        if (arr.length !== num) throw new RangeError('Tamanho Inválido')// Esse if faz a verificação de que se o tamanho do array 'arr' é diferente do número informado 'num'. Se caso realmente for diferente, o 'throw' chama o erro denominado 'RangeError', um erro personalizado do JavaScript, e apresenta a mensagem através da string.
        return arr; //caso o resultado seja válido, o array será retornado.
    }//fim do try
    catch (e){//o catch vai capturar os possíveis erros, e aplicar as respectivas ações determinadas para cada um.
        if (e instanceof ReferenceError){// se(if) o erro capturado (e) for um tipo de (instanceof) ReferenceError, então...
            console.log("Este erro é um ReferenceError.")// o console vai exibir a seguinte mensagem.
            console.log(e.message)// o console vai exibir a mensagem do erro
        } else if (e instanceof TypeError){// se(if) o erro capturado (e) for um tipo de (instanceof) TypeError, então...
            console.log("Este erro é um TypeError.")// o console vai exibir a seguinte mensagem.
            console.log(e.message)// o console vai exibir a mensagem do erro
        } else if (e instanceof RangeError){// se(if) o erro capturado (e) for um tipo de (instanceof) RangeError, então...
            console.log("Este erro é um RangeError.")// o console vai exibir a seguinte mensagem.
            console.log(e.message)// o console vai exibir a mensagem do erro
        }else { //caso o erro não seja os identificados acima...
            console.log("Tipo de erro não esperado:" + e); // o console informa a mensagem, e mostra qual o erro identificado.
        }//fim do else
    }//fim do catch
}//fim da function validaArray

console.log(validaArray([10, 'S', 'Samara', '<3','purple','ringlight'], 6));