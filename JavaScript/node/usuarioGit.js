// Começando async/await
// Exemplo derivado: https://www.taniarascia.com/promise-all-with-async-await/

// Dependências
const FETCH = require("node-fetch");
// Entrada de dados:
const LER_LINHA = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função Async, a qual exibe dados do usuário utilizando a API do Github:
async function infoUsuario(usuario) {
    try {
      const RESPOSTA = await FETCH('https://api.github.com/users/'+usuario);
      const INFO = await RESPOSTA.json();
      console.log(INFO);

    } catch (erro) {
// Em caso de erro:
      console.error(erro);
    }
  }
  
// Entrada de Dados do usuário:
  LER_LINHA.question('Digite o nome do usuário: ', name => {
    infoUsuario(name);
    LER_LINHA.close();
  });