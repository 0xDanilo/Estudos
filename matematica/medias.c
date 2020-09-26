

#include <stdio.h>
#include <math.h>

int main() {
    int a, b, c; 
    float ma, mh, mg, mp;

    printf("Digite um valor para A: ");
    scanf("%i", &a);
    printf("Digite um valor para B: ");
    scanf("%i", &b);
    printf("Digite um valor para C: ");
    scanf("%i", &c);

    //Médias:
    ma = (a+b+c)/3;
    mg = cbrt((a*b*c));
    mp = (1*a+2*b+3*c)/(1+2+3);

    printf("Media Aritimetica: %.2f \n", ma);
    printf("Media Geometrica: %.2f \n", mg);
    printf("Media Ponderada: %.2f \n", mp);

    return 0;
}


