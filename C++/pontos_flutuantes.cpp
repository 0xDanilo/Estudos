/*
	Utiliza %g e deixa a função 'printf' decidir
	a notação mais compacta dos números.
 */

#include <cstdio>

int main(){
	double constante_planck = 6.626'070'04e34;
	printf(" Constante de Planck: %le %lf %lg\n", constante_planck, constante_planck, constante_planck);

	float ph = 9.74;
	printf(" Plataforma para Hogwarts: %e %f %g\n", ph, ph, ph);

	printf(" Um brinde!! \U0001F37A \n");

	return 0;
}