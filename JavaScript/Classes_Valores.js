/*
    Exemplo de Classe para a 
    manipulação de valores numéricos
*/

class constantesMat {

//função que será utilizada para armazenar os nomes e os valores:
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
//Função que descreve a constante e o seu valor:
  	descricao() {
        console.log(`A constante ${this.nome} tem o valor ${this.valor}`);
    }
}
//Cria a Pi e atribui um valor:
let piValor = new constantesMat("Pi", 3.14);

//Cria uma propriedade e atribui o valor da raiz quadrada de 2
let raizQuadrada2 = new constantesMat("Raiz Quadrada de 2", 1.4142857);

//Chama o método que faz descrição da constante e o seu valor:
piValor.descricao();
raizQuadrada2.descricao();

//Executa uma operação matemática utilizando o valor de PI
let quadradoPI = Math.pow(piValor.valor, 2);

console.log(`Pi ao quadrado é ${quadradoPI}.`);
console.log(`Onde a variável piValor é um: ${Object.getPrototypeOf(piValor)}`);
