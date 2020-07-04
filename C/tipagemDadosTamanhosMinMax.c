#include <stdio.h>
#include <limits.h>
#include <float.h>

int main() {

	printf("O valor máximo de um Inteiro é: %i\n", INT_MAX);
	printf("O valor minimo de um Inteiro é: %i\n", INT_MIN);
	printf("Um int ocupa %zu bytes\n", sizeof(int));

	printf("O valor máximo de um float é: %f\n", FLT_MAX);
	printf("O valor minimo de um float é: %f\n", FLT_MIN);
	printf("Um float ocupa %zu bytes\n", sizeof(float));

	printf("O valor máximo de um short é: %i\n", SHRT_MAX);
	printf("O valor minimo de um short é: %i\n", SHRT_MIN);
	printf("Um short ocupa %zu bytes\n", sizeof(short));

	return 0;

}