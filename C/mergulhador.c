#include <stdio.h>

typedef struct {
	float capacidade_tanque;
	int tanque_psi;
	const char *material_mergulho;
} equipamento;

typedef struct scuba {
	const char *nome;
	equipamento kit;
} mergulhador;

void criar_cracha(mergulhador d) {
	printf("Nome: %s Tanque: %2.2f(%i) Roupa: %s\n", d.nome, d.kit.capacidade_tanque, d.kit.tanque_psi, d.kit.material_mergulho);
}

int main() {
	mergulhador joselito = {"Joselito", {5.5, 3500, "Neoprene"}};

	criar_cracha(joselito);

	return 0;
}