const pedido = [
{
    name: 'pizza',
    preco: 55
},
{
    name: 'refri',
    preco: 9
},
{
    nome: 'taxa de entrega',
    preco: 3
}
];

const valorPago = 100;

function calculaTroco(valorPago, pedido){
    return pedido.reduce(function (prev, current, index) {
    console.log('Rodada', index+1);
    console.log({prev});
    console.log({current});
    return prev - current.preco;
    }, valorPago);
}

console.log ('Seu troco é de R$ ', calculaTroco(valorPago, pedido));