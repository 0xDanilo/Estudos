//Abstraçåo...

function repetir(quantidade, acao) {
    for (let i = 0; i < quantidade; i++) {
        acao(i);
    }
}

//Cria um array[etiquetas] e depois coloca valores nele:
let etiquetas = [];
repetir(5, i => {etiquetas.push(`Unidade ${i + 1}`)});
console.log(etiquetas);

//Imprime a tabuada do 7:
repetir(11, i => {console.log(`7 x ${i} = ${7 * i}`)});