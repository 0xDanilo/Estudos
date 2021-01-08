//Exemplo simples de função async

async function simplesAsync() {
    console.log("Aguardando retorno...");
// Utilzando uma 'Promise' que 
    let promessa = new Promise((retorno) => {
        setTimeout(() => retorno("Retorno recebido!"), 3000);
    });

// Aguarda até que a promessa retorne o valor
    let result = await promessa; 
  
// Ao terminar, exibe o resultado no log
    console.log(result); 
    
}
//Chama a função
simplesAsync();