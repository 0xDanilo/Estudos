#include <stdio.h>

int main()
{
//Como o vetor não tem tamanha declarado, deve ser 
//atribuido um valor imediatamente
    char cartas []= "VDR"; 
    char uma_carta = cartas[2];

//Movimenta as cartas nas posições vetorias 0, 1, 2    
    cartas[2] = cartas[1];
    cartas[1] = cartas[0];
    cartas[0] = cartas[2];
    cartas[2] = cartas[1];
    cartas[1] = uma_carta;

    puts(cartas);


    return 0;
}
