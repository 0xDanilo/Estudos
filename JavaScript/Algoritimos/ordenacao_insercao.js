// Implementação do algoritmo "InsertionSort" do livro "Algoritmos, 3rd Edição". 
// Deixei comentadas as diferenças código, a página 14 do livro traz os motivos dessa notação em pseudo-código. 

let array_de_teste = [5,2,4,6,1,3];

console.log(`Array fora de ordem: [${array_de_teste}]`);

function ordenacao_insercao(array_de_entrada) {
    //O livro utliza na notação "j = 2" mas aqui é necessário "j = 1"
    for (let j = 1; j < array_de_entrada.length; j++) {
        let chave = array_de_entrada[j];
        let i = j - 1;
        // Outra divergencia do livro, aqui temos "i > 0" no livro
        while (i >= 0 && array_de_entrada[i] > chave ) {
            array_de_entrada[i + 1] = array_de_entrada[i];
            i = i - 1;        
        }
        array_de_entrada[i + 1] = chave;
    }
return array_de_entrada;
}

console.log(`Array ordenado: [${ordenacao_insercao(array_de_teste)}]`);