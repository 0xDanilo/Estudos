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

    set(x, y, value) {
        return this.conteudo[y * this.largura + x] = value;
    }
}

class MatrizIterador {
    constructor(matriz) {
        this.x = 0;
        this.y = 0;
        this.matriz = matriz;
    }

    next() {
        if (this.y == this.matriz.altura) return {done: true};

        let value = {x: this.x,
                     y: this.y,
                    value: this.matriz.get(this.x, this.y)};
        this.x++;

        if (this.x == this.matriz.largura) {
            this.x = 0;
            this.y++;
        }
        return {value, done: false};
    }
}

Matriz.prototype[Symbol.iterator] = function() {
    return new MatrizIterador(this);
}

let matriz = new Matriz(2,2, (x,y) => `value ${x}, ${y}`);
for (let {x, y, value} of matriz) {
    console.log(x, y, value);
}