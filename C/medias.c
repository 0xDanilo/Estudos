

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

    //media aritimética:
    ma = (a+b+c)/3;
    //Media harmonica, em C, precisa ser reescrita para somar 
    //frações.
    //mh = 3/(1/a+1/b+1/c);
    mg = cbrt((a*b*c));
    mp = (1*a+2*b+3*c)/(1+2+3);

    printf("Media Aritimetica: %f \n", ma);
    //printf("Media Harmonica: %f \n", mh);
    printf("Media Geometrica: %f \n", mg);
    printf("Media Ponderada: %f \n", mp);

    return 0;
}


