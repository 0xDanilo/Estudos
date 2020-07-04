#include <cstdio>

int funcao_passo (int x) {
	int result = 0;
	if (x < 0) result = -1;
	else if (x > 0) result = 1;
	return result;
}

int main()
{
	int num1 = 42;
	int resultado1 = funcao_passo(num1);

	int num2 = 0;
	int resultado2 = funcao_passo(num2);

	int num3 = -32767;
	
	printf("Num1: %d, Passo: %d\n", num1, resultado1);

	printf("Num2: %d, Passo: %d\n", num2, resultado2);

	printf("Num3: %d, Passo: %d\n", num3, funcao_passo(num3));

	return 0;
}
