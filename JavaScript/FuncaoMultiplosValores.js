/*Retornando mais de um valor através de uma função utilzando vetores
para armazenar os valores*/

function encontrarTamanho(largura, altura, profundidade) {
    let area = largura * altura;
    let volume = profundidade * altura * largura;
    let tamanhos = [area, volume];
  	return tamanhos;
}

console.log(encontrarTamanho(3, 2)[0]);
console.log(encontrarTamanho(3, 2, 3)[1]);