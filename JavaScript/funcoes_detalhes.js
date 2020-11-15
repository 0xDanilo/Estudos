// Funções

// Quando declaradas como expressão, não é possivel
// acessar a função antes que a expressão que a define
// seja evaluada.

console.log(soma(2, 2));
// Descomente o código abaixo e veja o erro
// console.log(adicao(2.2));

function soma (x, y) {
    return x + y;
}

// utitilize a palavra "const" é recomendado pra evitar que 
// que você sobrescreva a função com novos valores. 

const adicao = function (x, y) {
    return x + y;
}; // ponto e virgula porque você está declarando uma expressão. 
// executada normalmente
console.log(adicao(2, 2));

// Closures

let escopo = "escopo global";
function checar_escopo() {
    let escopo = "escopo local";
    function f() {return escopo; }
    return f;
}
console.log(checar_escopo()());

let inteiroUnico = (function() {
    let contador = 0;
    return function() {return contador++; };
}());

console.log(inteiroUnico(), inteiroUnico(), inteiroUnico());

// Nested Functions:
function hipotenusa(a, b) {
    function quadrado(x) { 
        return x * x;
    }
    return Math.sqrt(quadrado(a) + quadrado(b));
}

console.log(hipotenusa(5, 6));

