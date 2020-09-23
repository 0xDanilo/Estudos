/*
Versão em JavaScript do arquivo "conjuntos.c":
https://github.com/0xDanilo/Estudos/blob/master/C/conjuntos.c

Precisa de Node.js pra ser executado, não encontrei uma forma
de evitar a quebra de linha provocada pela função console.log 
dentro do loop.
*/

let x = [1,2,3,4,5,6];
let y = [1,2,3,5,8,13];

process.stdout.write(`R1 =`);
for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
        if (x[i] + y[j] > 10) {
        process.stdout.write(` {${x[i]}, ${y[j]}}`);
        }
    }
}

process.stdout.write(`\nR2 =`);
for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
        if (x[i] == 2 * y[j]) {
        process.stdout.write(` {${x[i]}, ${y[j]}}`);
        }
    }
}

process.stdout.write(`\nR3 =`);
for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
        if (x[i] > y[j]) {
        process.stdout.write(` {${x[i]}, ${y[j]}}`);
        }
    }
}
