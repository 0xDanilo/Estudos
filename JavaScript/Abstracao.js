//Abstraçåo...

function repetir(n, acao) {
    for (let i = 0; i < n; i++) {
        acao(i);
    }
}

repetir (4, console.log);

let etiquetas = [];
repetir(5, i => { etiquetas.push(`Unidade ${i + 1}`)});

console.log(etiquetas);