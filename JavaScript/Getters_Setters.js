let tamanhoVariavel = {
    get tamanho() {
        return Math.floor(Math.random() * 100);
    }
};

//Comparado com:

let tamanhoVariavel_2 = {
      gerarTamanho() {
        return Math.floor(Math.random() * 100);
    }
};

console.log(tamanhoVariavel.tamanho);
console.log(tamanhoVariavel.tamanho);

console.log(tamanhoVariavel_2.gerarTamanho());
console.log(tamanhoVariavel_2.gerarTamanho());