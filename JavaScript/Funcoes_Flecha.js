/*
    Funções Flecha
*/
//Declaração de funções regulares:
function calculoIMC(peso, altura) {
    resultado = peso/(Math.pow(altura, 2));
    return resultado;
}
//Funções Flecha podem ser usadas quando a função restorna apenas 1 argumento:
const calculoIMC2 = (peso, altura) => peso/(Math.pow(altura, 2));
/*************************************************************************/

// Essa função arredonda o resultado.
function arredondaNumero1(numero) {
    resultado = (Math.round((numero + Number.EPSILON) * 100) / 100);
    return resultado;
}
// Essa função arredonda o resultado.
const arredondaNumero2 = (numero) => (Math.round((numero + Number.EPSILON) * 100) / 100);
/*******************************************************************************/

// Passa os argumentos para a função e armazena em resultado:
let resultado1 = calculoIMC(80, 1.80);
//Imprime o resultado arrendado:
console.log("O IMC é", arredondaNumero1(resultado1));

// Passa os argumentos para a função e armazena em resultado:
let resultado2 = calculoIMC2(80, 1.80);
//Imprime o resultado arrendado:
console.log("O IMC é", arredondaNumero2(resultado2));