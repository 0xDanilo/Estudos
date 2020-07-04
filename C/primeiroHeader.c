#include <stdio.h>
#include <stdlib.h>
#include "primeiroHeader.h"

float total = 0.0;
short quantidade_Itens = 0;
short imposto_porcentagem = 6;


int main() {
	float val;

	system("clear"); 

	printf("Digite o preço de um item ou digite qualquer letra para finalizar: ");
	while ( scanf("%f", &val) == 1) {
		printf("Total até agora: %.2f\n", somar_com_imposto(val));
		printf("Preço do item: ");;
	}
	printf("\nTotal Final: %.2f\n", total);
	printf("Numero de items: %hi\n", quantidade_Itens);

	return 0;
}

float somar_com_imposto (float f) {
	float imposto_quantidade = 1 + imposto_porcentagem / 100.0;
	total += (f * imposto_quantidade);
	quantidade_Itens += 1;

	return total;
}
