#include <stdio.h>
#include <math.h>

int main() {
    
    float x, y, pxQ, somaPQ;

    printf("Valores para a Curva Eliptica na equação:\ny**2 = 4*(x**3) - 3*x + 2\n");

    for (x = -1; x < 1.0; x += 0.1)
    {
        y = 4*(pow(x, 3)) - 3*x + 2;
        
        printf("{%.1f, %f} \n", x, y);
    }


    
    return 0;
}