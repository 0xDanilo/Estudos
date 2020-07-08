function pontoAleatorioCirculo (raio)   {
    let angulo = Math.random() * 2 * Math.PI;
    return {x: raio * Math.cos(angulo),
            y: raio * Math.sin(angulo)};
}

console.log(pontoAleatorioCirculo(2))