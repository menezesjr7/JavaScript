class ContaBancaria {//crio a classe chamada ContaBancaria
    constructor (agencia, numero,tipo){//constrói os parâmetros da classe ContaBancaria. No caso, os parâmetros criados foram agencia, numero,tipo, saldo.
    this.agencia = agencia; // Aqui criamos uma variável chamada agencia, e o 'this' vai referenciar o que inserirmos, ou seja, atribuir o valor da variável agencia, no parâmetro agencia da classe ContaBancaria
    this.numero = numero; //Igualmente, atribuiu o valor da variavel numero, ao parâmetro numero da classe ContaBancaria
    this.tipo = tipo; // Valor da variavel tipo ao parâmetro tipo da classe
    this._saldo = 0; //Parâmetro saldo recebe o valor de saldo.Note que usamos o underline antes, para diferenciar a função saldo, do parâmetro saldo.
    }

    get saldo(){//função get saldo (pegar o saldo, conferir o saldo)
        return this._saldo; //retorna o saldo quando solicitado
    }

    set saldo(valor){ //função de definir um saldo (setar, configurar)
        this._saldo = valor; //o saldo recebe o valor que inserirmos
    }

    sacar (valor) { //cria o método sacar, que vai receber um valor... 
        if (valor > this._saldo){ // antes de sacar,verifica se o saldo é suficiente
            return 'Operação Negada. Saldo Insuficiente';//caso seja insuficiente, ele mostra a mensagem
        }
        this._saldo = this._saldo - valor; // e vai deduzir o valor do saldo atual
        return this._saldo; //ao final do saque, mostra quando restou de saldo
    }

    depositar (valor){ //cria o método deposistar, que vai receber um valor
        this._saldo = this._saldo + valor; // e vai somar o valor mais o saldo atual
        return this._saldo; //ao final do depósito, mostra quando ficou de saldo
    }
}

class ContaCorrente extends ContaBancaria {  // cria uma nova classe com o nome ContaCorrente. Ela será filha da classe ContaBancaria
    constructor (agencia, numero, cartaoCredito) { // aqui se constrói os parâmetros da classe ContaCorrente. No caso, os parâmetros criados foram agencia, numero, saldo e cartaoCredito.
    super (agencia, numero);  // aqui o super irá pegar as mesmas propriedades dos parâmetros da classe pai (ContaBancaria)
    this.tipo = 'corrente'; //  já o tipo, será definido diretamente como corrente
    this._cartaoCredito = cartaoCredito; // atribui o valor da variavel cartaoCredito ao parâmetro cartaoCredito. 
    }
    get cartaoCredito (){ // cria o get de cartaoCredito para ver se a pessoa tem ou não cartaoCredito
        return this._cartaoCredito; //retorna true or false
    }
    set cartaoCredito (valor){ // cria o set para cartaoCredito para definir o valor de limite do cartaoCredito
        this._cartaoCredito = valor; //define o limite do cartaoCredito
    }
}
    class ContaPoupanca extends ContaBancaria {  // cria uma nova classe com o nome ContaPoupanca. Ela será filha da classe ContaBancaria
        constructor (agencia, numero) { // aqui se constrói os parâmetros da classe ContaPoupanca. No caso, os parâmetros criados foram agencia, numero e saldo.
        super (agencia, numero);  // aqui o super irá pegar as mesmas propriedades dos parâmetros da classe pai (ContaBancaria)
        this.tipo = 'poupanca'; //  já o tipo, será definido diretamente como poupança
        }
    }
    class ContaUniversitaria extends ContaBancaria {  // cria uma nova classe com o nome ContaUniversitaria. Ela será filha da classe ContaBancaria
        constructor (agencia, numero) { // aqui se constrói os parâmetros da classe ContaUniversitaria. No caso, os parâmetros criados foram agencia, numero e saldo.
        super (agencia, numero);  // aqui o super irá pegar as mesmas propriedades dos parâmetros da classe pai (ContaBancaria)
        this.tipo = 'universitaria'; //  já o tipo, será definido diretamente como poupança
        }

        sacar(valor){
            if (valor > 500){
                return 'Não autorizado. Limite de saque R$ 500,00';
            }
            this._saldo = this._saldo - valor;
            return this._saldo;
        }
    }