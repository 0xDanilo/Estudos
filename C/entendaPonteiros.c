#include <stdio.h>
#include <stdlib.h>

void trocar(int, int);
void trocarPonteiros(int *pa, int *pb);

int main(void) { 
    int a = 21; 
    int b = 17;

    printf("\nChamanda inicial: a = %d, b = %d\n", a, b); 
    trocar(a, b);
    printf("Chamada no programa principal depois de usar a função 'trocar': a = %d, b = %d\n", a, b); 
    trocarPonteiros(&a, &b);
    printf("Chamada no programa principal depois de usar a função 'trocar' com ponteiros: a = %d, b = %d\n", a, b); 
    printf("\n");

    return EXIT_SUCCESS;
}

void trocar(int a, int b) { 
    int t = a;
    a = b;
    b = t;
    
    printf("Chamada na função: a = %d, b = %d\n", a, b); 
}

void trocarPonteiros(int *pa, int *pb) { 
    int t = *pa;
    *pa = *pb;
    *pb = t; 
}