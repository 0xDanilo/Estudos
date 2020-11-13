//Spread operator converte strings em arrays"
let numeros = [..."0123456789"];
console.log(numeros);

// Criando arrays com o construtor:

let vetor_10_elementos = new Array(10);
console.log(vetor_10_elementos);

//Cria um vetor fora de ondem
let numeros_sem_ordem = [..."0897615423"];
console.log(numeros_sem_ordem);
//orgraniza o vetor em ordem
let numeros_em_ordem = numeros_sem_ordem.sort();
console.log(numeros_em_ordem);

let matrix = new Float64Array(9);
console.log(matrix);
