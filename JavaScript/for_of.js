const vetor = [2, 3, 5, 7, 11]; // objeto iterável
let soma = 0;

// Para o loop de for/of o objeto deve ser iterável
for (const numeros of vetor) {
    soma += numeros;
}
console.log(soma);

// Para objetos não iterável, é possivel utilizar os métodos:
// Object.keys(nome_do_objeto);
// Object.values(nome_do_objeto);
// Object.entries(nome_do_objeto);

const objeto_nao_iteravel = {a: 2, b: 3, c: 5, d: 7, e: 11};
let soma2 = 0;
for (const valores of Object.values(objeto_nao_iteravel)) {
    soma2 += valores;
}
console.log(soma2);

// strings 

let frequencia = [];

for (let letra of "Sweet home Brazil") {
    if (frequencia[letra]) {
        frequencia[letra]++;
    } else {
        frequencia[letra] = 1;
    }
}
console.log(frequencia);