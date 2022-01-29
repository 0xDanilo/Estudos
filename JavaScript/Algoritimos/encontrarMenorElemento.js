//Encontre o menor numero dentro de um array, utilizando apenas estruturas basicas de programação:

let array_aleatorio = [56, 7, -1, 9, 98, -5, 75, 4, 82, 50, 923, 859, 845, 37];

function encontrarMenorNumero (array) {
    let menorNumero = array[0];

    for (let i = 1; i < array.length; i++) {
      if (menorNumero > array[i]) {
          menorNumero = array[i];
      }
    }
return menorNumero;
}
  
console.log("O menor elemento no array é ", encontrarMenorElemento(array_aleatorio));