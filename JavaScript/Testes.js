/*
        Testes
*/

//Cria a a função "teste" que receberá o nome do teste e o retorno esperado
teste = (nome, retornoEsperado) => {
    if (!retornoEsperado()) console.log(`Falha!!!\nO teste "${nome}" não passou.\n `);
    else (console.log(`Teste "${nome}" executado com sucesso.\n`)); 
  }; 

//Exemplo de utilização da função "teste", testa se o metodo "pow" de 2 elevado 16 retornará
//retornará "65536" que é o resultado esperado.

teste("2 elevado a 16.", () => {
    return Math.pow(2, 16) == 65536; 
});
