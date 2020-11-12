
class Retangulo {
    constructor(altura, largura) {
        this.altura =  altura;
        this.largura = largura;
    }

    area() {
        return this.altura * this.largura;
    }
    
     cabe_dentro(x, y) {
        return x.largura > y.largura && x.altura > y.altura;
    }
}

const retangulo1 = new Retangulo(30, 50);
const retangulo2 = new Retangulo(29, 49);

console.log(retangulo1);
console.log(retangulo2);


console.log(`A área do primeiro retangulo é ${retangulo1.area()} pixels quadrados.`);
console.log(`A área do primeiro retangulo é ${retangulo2.area()} pixels quadrados.`);


console.log(`O primeiro retangulo cabe dentro do segundo? ${retangulo1.cabe_dentro(retangulo1, retangulo2)}`);
