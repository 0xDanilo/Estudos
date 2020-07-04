#include <stdio.h>

struct exercicios {
	const char *descricao;
	float duracao;
};

struct refeicao {
	const char *ingredientes;
	float peso;
};

struct preferencias {
	struct refeicao comida;
	struct exercicios atividades;
};

struct peixe {
	const char *nome; 
	const char *especie; 
	int dentes;
	int idade;
	struct preferencias cuidados;
};

void catalogar (struct peixe p) {
	printf("%s é um(a) %s com %i dentes e tem %i anos.\n", p.nome, p.especie, p.dentes, p.idade);
	printf("Alimentado com %2.2f lbs de %s e gosta de %s por %2.2f horas.\n", p.cuidados.comida.peso, p.cuidados.comida.ingredientes, p.cuidados.atividades.descricao, p.cuidados.atividades.duracao);
}

void etiquetar (struct peixe p) {
	printf("Nome: %s\nEspecie: %s\nDentes: %i\nIdade: %i\nComida: %s\nComida por dia: %2.2f lbs\nExercicios: %s\nDuração dos Exercicios: %2.2f\n", p.nome, p.especie, p.dentes, p.idade, p.cuidados.comida.ingredientes, p.cuidados.comida.peso, p.cuidados.atividades.descricao, p.cuidados.atividades.duracao);
}

int main() {
	struct peixe snappy = {"Snappy", "Piranha", 69, 4, {{"Carne", 0.2}, {"nadar na baheira", 7.5}}};
	catalogar(snappy);
	etiquetar(snappy);

	return 0;
}