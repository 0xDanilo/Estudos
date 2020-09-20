/*
Resolvendo um exercício de Lógica para Computação combinando algoritmos
na busca do conjunto correto:
*/

#include <stdio.h>

int main() {

//Conjuntos x e y com seus respectivos elementos:

    int x[] = {1,2,3,4,5,6};
    int y[] = {1,2,3,5,8,13};

//Variáveis que seram utilizadas para o loop:
    int i, j;

    printf("R1 = "); 
    for(i = 0; i < 6; i++) {
        for (j = 0; j < 6; j++) {
            /*
            Aqui fica condição para a combinação de conjuntos (x, y). 
            Nesse exemplo a combinação foi "x + y > 10".
            */
            if (x[i] + y[j] > 10) {
                printf("{%i, %i} ", x[i], y[j]);
            }
        }
    }

    printf("\nR2 = "); 
    for(i = 0; i < 6; i++) {
        for (j = 0; j < 6; j++) {
            if (x[i] == 2 * y[j]) {
                printf("{%i, %i} ", x[i], y[j]);
            }
        }
    }

    printf("\nR3 = "); 
    for(i = 0; i < 6; i++) {
        for (j = 0; j < 6; j++) {
            if (x[i] > y[j]) {
                printf("{%i, %i} ", x[i], y[j]);
            }
        }
    }

    return 0;
}