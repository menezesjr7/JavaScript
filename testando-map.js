function getAdmins(map) { //cria a função getAdmins utilizando o Map
    let admins = []; //cria um vetor para receber os valores desejados, no caso os nomes dos admins
    for([key, value] of map) { // cria um for, que vai utilizar as chaves e os valores constantes no Map
       if (value === 'Admin') { //faz a comparação, se o valor comparado for igual à 'Admin', então...
           admins.push(key);// ele pega esse valor, e coloca no vetr 'admins'
       } // fecha o if
    }//fecha o for
    return admins;//no final,ele vai retornar o vetor 'admins' com os valores pegos do Map
}//fecha a função

const usuarios = new Map();//cria o Map que receberá os valores de cada pessoa

usuarios.set('Elton','Admin');//insere o nome e o tipo de usuário no Map 'usuarios'
usuarios.set('Adriana','Admin');//insere o nome e o tipo de usuário no Map 'usuarios'
usuarios.set('Junior','Admin');//insere o nome e o tipo de usuário no Map 'usuarios'
usuarios.set('Rodrigo','User');//insere o nome e o tipo de usuário no Map 'usuarios'
usuarios.set('Caique','User');//insere o nome e o tipo de usuário no Map 'usuarios'
usuarios.set('Samara','User');//insere o nome e o tipo de usuário no Map 'usuarios'


console.log(getAdmins(usuarios)); //executa a função getAdmins no console