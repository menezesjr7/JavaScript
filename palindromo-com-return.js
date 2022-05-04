function verificaPalindromo(string){
    if (!string) return "String Inválida";

    return string === string.split('').reverse().join('');
}


console.log(verificaPalindromo(''));