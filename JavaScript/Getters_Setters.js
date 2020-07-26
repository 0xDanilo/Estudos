/* 
Getters - propriedades que são acessadas diretamente
podem esconder uma chamada para um método, esses métodos
são chamados de "Getters". 
*/

let tamanhoVariavel = {
    get tamanho() {
        return Math.floor(Math.random() * 100);
    }
};

//Comparado com uma função:

let tamanhoVariavel_2 = {
      gerarTamanho() {
        return Math.floor(Math.random() * 100);
    }
};

console.log(tamanhoVariavel.tamanho);

console.log(tamanhoVariavel_2.gerarTamanho());

console.log(new Date());

