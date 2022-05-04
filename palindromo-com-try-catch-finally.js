function verificaPalindromo(string){
    if (!string) throw "String Inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string){
    try{
        verificaPalindromo(string)
    }
    catch(e) {
        console.log(e);
    }
    finally{
        console.log('A string enviada foi:' + string);
    }
}

tryCatchExemplo('ovo');