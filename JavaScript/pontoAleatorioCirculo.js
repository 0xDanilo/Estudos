

function pontoAleatorioCirculo (raio)   {
    let angulo = Math.random() * 2 * Math.PI;
     //a função retorna dois objetos, x e y 
    return {x: raio * Math.cos(angulo),
            y: raio * Math.sin(angulo)};
}

console.log(pontoAleatorioCirculo(2));

//Rest Parameters: função que aceita um número indefinido de parâmetros:

function maximo(...numeros) {
    let resultado = -Infinity;
    for (let numero of numeros) {
        if (numero > resultado) resultado = numero;
    }
    return resultado;
}
//retorna o maior numero passado pela função:
console.log(maximo(23, -32, 0, 321));

