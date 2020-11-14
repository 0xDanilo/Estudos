// Strings
// Spread operator converte strings em arrays"
let numeros = [..."0123456789"];
console.log(numeros);

// Cria um vetor fora de ondem
let numeros_sem_ordem = [..."0897615423"];
console.log(numeros_sem_ordem);

// Organiza o vetor em ordem
let numeros_em_ordem = numeros_sem_ordem.sort();
console.log(numeros_em_ordem);


// Números
// Cria um vetor usando o construtor do objeto "Array"
let vetor = new Array(9);

// Coloca elementos dentro do vetor
for (let i = 0; i < vetor.length; i++) {
    vetor[i] = i + 1;
}
// Console.log(vetor);
console.log(vetor);

// Converte para os elementos para uma string, assim como o .join()
console.log(vetor.toString());

// Soma todos os elementos da matriz
console.log(vetor.reduce((x,y) => x + y, 0)); //"0" é opcional


// Função que cria uma matriz
function criaMatriz(linhas, colunas) {
    let matriz = new Array(linhas);
    for (let i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(colunas);
    }
    console.log(matriz);
}
// Cria uma matriz de "4 x 5"
criaMatriz(4, 5);

