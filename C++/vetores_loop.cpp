#include <cstddef>
#include <cstdio>

int main () {
	unsigned long maximo = 0;
	unsigned long valores [] = {10, 50, 20, 40, 0};

//size_t é usado ao invés de 'int', considerando que os valores
//poderiam consumir toda a memoria alocada, size_t é opção correta
//para o vetor. 
	for (size_t i = 0; i < 5; ++i)
	{
		if (valores[i] > maximo) maximo = valores[i];
	}

	printf("O valor máximo é %lu\n", maximo);

	return 0;
}