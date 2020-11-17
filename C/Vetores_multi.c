
#include <stdio.h>

void imprimeMatriz( int totalLinhas, int totalCol, int matriz[][totalCol]) {

	for (size_t linhas = 0; linhas < totalLinhas; linhas++)
	{
		for( size_t colunas = 0; colunas < totalCol; colunas++)
		{
	    	printf("%d     ", matriz[linhas][colunas]);
		}
		printf("\n");
	}
}

int main(void) {

	int a[3][4] = {	{0, 1, 2, 3} ,   
					{4, 5, 6, 7} ,   
					{8, 9, 10, 11}  
					};
	
	int totalLinhas = sizeof(a)/sizeof(a[0]);
	int totalColunas = sizeof(a[0])/sizeof(a[0][0]);

	imprimeMatriz(totalLinhas, totalColunas, a);




	return 0;
}



