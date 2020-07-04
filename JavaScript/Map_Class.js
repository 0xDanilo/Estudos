/*
Aplicação da classe Map() nativa.
*/

//Cria um novo objeto da classe "Maps" chamado "idades":
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

//Passa os nomes (Strings) a serem verificados:
 verificaIdade("Carlos");
 verificaIdade("Josué");


