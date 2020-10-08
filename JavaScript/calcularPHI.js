class Correlacao{
//"Constructor" cria as poproedades que um objeto dessa classe podera receber
    constructor(nomeCorrelacao, resultado) {
        this.nomeCorrelacao = nomeCorrelacao;
        this.resultado = resultado;
    }

//Metódos
    phi([n00, n01, n10, n11]) {
        return (n00 * n11 - n10 * n01) / 
            Math.sqrt((n10 + n00) *
                    (n11 + n01) *
                    (n01 + n00) *
                    (n11 + n10));
    }

    resultadoPhi(resultado) {
        if (resultado > 1) {
            console.log(`A correlação entre ${this.nomeCorrelacao} apresentou um resultado acima de 1. Verfique os dados.`);
        }

        if (resultado > 0.5) {
            console.log(`A correlação entre ${this.nomeCorrelacao} é de ${resultado}. Resultado alto.`);
        }
        else {
            console.log(`A correlação entre ${this.nomeCorrelacao} é de ${resultado}. Resultado baixo.`);
        }
    }
}

let teste = new Correlacao("Evento 1 e Evento 2", [76, 9, 4, 100]);
teste.resultadoPhi(teste.phi(teste.resultado));

let teste2 = new Correlacao("Evento 3 e Evento 4", [8000, 100000, 4, 60]);
teste2.resultadoPhi(teste2.phi(teste2.resultado));

//teste2.resultadoPhi(teste2.phi([8000, 100000, 4, 60]));

//imprime na tela os objetos e suas propriedades:
console.log("\n");
console.log(teste);
console.log(teste2);
