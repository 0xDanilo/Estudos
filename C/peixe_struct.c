#include <stdio.h>

struct peixe {
	const char *nome; 
	const char *especie; 
	int dentes;
	int idade;
};

void catalogar (struct peixe p) {
	printf("%s é um(a) %s com %i dentes e tem %i anos.\n", p.nome, p.especie, p.dentes, p.idade);
}

void etiquetar (struct peixe p) {
	printf("Nome: %s\nEspecie: %s\nDentes: %i\nIdade: %i\n", p.nome, p.especie, p.dentes, p.idade);

}

int main() {
	struct peixe snappy = {"Snappy", "Piranha", 69, 4};
	catalogar(snappy);
	etiquetar(snappy);

	return 0;
}