#include <stdio.h>

float econtrarTamanho(float largura, float altura, float profundidade) {
    float tamanhos[2];
    float area, volume;

    area = largura * altura;
    volume = profundidade * altura * largura;
    tamanhos[0] = area;
    tamanhos[1] = volume;
    
    if (profundidade == 0) return tamanhos[0];
    else return tamanhos[1];
}

int main()
{
    float largura, altura, profundidade, resultado;

    printf("Altura: ");
    scanf("%f", &altura);
    printf("profundidade: ");
    scanf("%f", &profundidade);
    printf("largura: ");
    scanf("%f", &largura);

    resultado = econtrarTamanho(altura, largura, profundidade);

    printf("%.2f", resultado);

    return 0;
}

