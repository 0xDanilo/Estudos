class Matriz {
    constructor(largura, altura, elemento = (x,y) => undefined) {
        this.largura = largura;
        this.altura = altura;
        this.conteudo = [];

        for (let y = 0; y < altura; y++){
            for (let x = 0; x < largura; x++) {
                this.conteudo[y * largura + x] = elemento(x, y);
            }
        }
    }

    get(x, y) {
        return this.conteudo[y * this.largura +x];
    }

    set(x, y, valor) {
        return this.conteudo[y * this.largura + x] = valor;
    }
}

let matriz2x2 = new Matriz(2,2);

console.log(matriz2x2);