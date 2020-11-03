/*
        Exemplos de Desestruturação e mais algumas anotações

        - na sintaxe é o uso dos simbolos [] (array) ou {} (objeto) 
        sobre nome na declaração da variavel ou objeto a ser 
        desestruturado.
*/
//o mesmo que let x = 1; let y = 2;
let [x,y] = [1,2]; 

console.log(x, y);

//Coletando os valores restantes dentro de uma única variável quando 
//desestruturar um array:
let [primeiro, ...restante] = [1, 2, 3, 4, 5];

//Desestruturação em um objeto iterável (restorna o restante em um array)
let [primeira, ...resto] = "Hello";

/*
    Desestruturação em Objetos
*/

//Desestruturação usada em um loop:
let objeto_1 = {x: 1, y: 2}; //objeto para o loop

for (const [name, value] in Object.entries(objeto_1)) {
    console.log(name, value);
}


//Cria um novo objeto:
let objeto_2 = {a: 1, b: 2, c: 3};

//Desestrutura o objeto em três variáveis:
let {a: numero1, b: numero2, c: numero3} = objeto_2;
console.log(numero1, numero2, numero3);

//Desestrutura um objeto global
let {round: arrendondar} = Math;
arrendondar(12.323);


