
let numeros = {x: 1, y: 2};
// Retorna true caso a nome da propriedade exista no objeto:
console.log("x" in numeros);
// O operador "in" não verifica os VALORES das propriedades
// como não existe a propriedade 1, a expressão retorna falso:
console.log(1 in numeros); 
console.log("1" in numeros);

console.log("\n");
// Operador "instanceof"
let dia = new Date();
// Verifica se o Objeto "dia" faz parte de uma "classe de objetos":
console.log(dia instanceof Date); 
console.log(dia instanceof Object);
console.log(dia instanceof Number);

// Operador Condicional "? : "
// Uma especie de atalho caso a primeira operação retorne falso
// é executada a segunda parte da expressão, algo semelhante há um
// "if - else"
console.log("\nNome de usuário indefinido");
let nome_de_usuario;
console.log(nome_de_usuario === undefined);// retorna "true", pois
// a variável possui um valor "indefinido"
cumprimento = "Olá " + (nome_de_usuario ? nome_de_usuario: "cara.");
console.log(cumprimento);

console.log("\nDessa vez o nome de usuário foi definido:");
nome_de_usuario = "José."; //define um valor para variável
console.log(nome_de_usuario === undefined); // retorna "false"
cumprimento = "Olá " + (nome_de_usuario ? nome_de_usuario: "cara.");
console.log(cumprimento);
