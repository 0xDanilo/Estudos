class Correlacao{
    constructor(nomeCorrelacao, resultado) {
        this.nomeCorrelacao = nomeCorrelacao;
        this.resultado = resultado;
    }
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

let teste = new Correlacao("pizza e esquilo");
teste.resultadoPhi(teste.phi([76, 9, 4, 100]));

let teste2 = new Correlacao("Trabalho e riqueza");
teste2.resultadoPhi(teste2.phi([8000, 100000, 4, 60]));