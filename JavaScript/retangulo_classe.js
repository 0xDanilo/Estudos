
class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    area() {
        return this.altura * this.largura;
    }
    
    cabe_dentro(retangulo1, retangulo2) {
        return retangulo1.largura > retangulo2.largura && retangulo1.altura > retangulo2.altura;
    }
}

const retangulo1 = new Retangulo(30, 50);
const retangulo2 = new Retangulo(29, 49);

console.log(`A área do primeiro retangulo é ${retangulo1.area()} pixels quadrados.`);
console.log(`O primeiro retangulo cabe dentro do segundo? ${retangulo1.cabe_dentro(retangulo1, retangulo2)}`);



