/*
    Esses exemplos foram retirados do livro 
            Eloquent JavaScript
*/

let coelho = {};
coelho.fala = function(frase) {
    console.log(`O coelho diz '${frase}'`);
};

coelho.fala("Eu estou vivo.");

//Prototipo

let protoCoelho = {
    fala(frase) {
        console.log(`O coelho ${this.tipo} diz '${frase}'.`);
    }
};

let coelhoAssassino = Object.create(protoCoelho);
coelhoAssassino.tipo = "assassino";
coelhoAssassino.fala("AAHHHHHHHH!!!");

//  Classes
//Antes de 2015...

function criaCoelho(tipo) {
    let coelho = Object.create(protoCoelho);
    coelho.tipo = tipo;
    return coelho;
}

//Depois de 2015...

class Coelho {
    constructor(tipo, cor) {
        this.tipo = tipo;
        this.cor = cor;
    }
    
    fala(frase) {
        console.log(`O coelho ${this.cor} ${this.tipo} diz '${frase}'`);
    }
}

let coelhoLegal = new Coelho("legal", "azul");
let coelhoLouco = new Coelho("louco", "verde");

coelhoLegal.fala("Oi");
coelhoLouco.fala("HAHAHAHAHAHA!!!");
