/*
    Aplicação da classe Map() nativa com Node.js
    - Requerimentos: Node.js
    - Para executar: node Node_EntradaDados.js
*/


const leiaLinha = require("readline");
const entradaDados = leiaLinha.createInterface({
    input: process.stdin,
    output: process.stdout
});


let idades = new Map();

//Cria o nome (que devem ser strings) das propriedades do objeto "idades" e atribui seus valores:
idades.set("José", 45);
idades.set("Maria", 36);
idades.set("Antonio", 30);

//Função que retorna o nome e a idade do usuário coso esteja cadastrado:
function verificaIdade(nome) {
    console.log(`Verificando a idade de ${nome}...`);

    if (idades.has(nome) === true) {
        console.log(`${nome} tem ${idades.get(nome)} anos.`);
    } else {
        console.log(`${nome} não está cadastrado.`);
    }
}

//Interação com o usuário:
entradaDados.question("Qual usuario você deseja verificar a idade? ", function(nome) {
    verificaIdade(nome);
     entradaDados.close();
});

entradaDados.on("close", function() {
    console.log("\nScript executado com sucesso!!");
    process.exit(0);
});