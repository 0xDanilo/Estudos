
#include <stdio.h>

void imprimeMatriz(int y, int z, int array[][z]) {
	int linhas, colunas;

	for (linhas = 0; linhas < y; linhas++)
	{
    	for(colunas = 0; colunas < z; colunas++)
    	{
        	printf("%d     ", array[linhas][colunas]);
    	}
    	printf("\n");
	}
}

int main(void) {

	int a[3][4] = {	{0, 1, 2, 3} ,   
					{4, 5, 6, 7} ,   
					{8, 9, 10, 11}  
					};

	imprimeMatriz(3, 4, a);

	return 0;
}



