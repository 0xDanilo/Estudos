#include <stdio.h>
#include <math.h>

//Função que computa a correlação
float phi(int n00, int n01, int n10, int n11) {
    return (n00 * n11 - n10 * n01) / 
            sqrt((n10 + n00) *
            (n11 + n01) *
            (n01 + n00) *
            (n11 + n10));
}

int main() {
    float correlacao;
    int n00, n01, n10, n11;

    printf("Número de vezes que nenhum dos evento ocorreram: ");
    scanf("%i", &n00);
    printf("Número de vezes que o primeiro evento não ocorreu e o segundo ocorreu: ");
    scanf("%i", &n01);
    printf("Número de vezes que o primeiro evento ocorreu e o segundo não ocorreu: ");
    scanf("%i", &n10);
    printf("Número de vezes que o primeiro evento e o segundo ocorreram: ");
    scanf("%i", &n11);

//passa os argumentos para a função e armazena o resultado na variável
    correlacao = phi(n00, n01, n10, n11);

//imprime o resultado na tela
    printf("Correlação de: %0.9f ", correlacao);

    return 0;
}