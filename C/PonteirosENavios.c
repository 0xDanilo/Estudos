#include <stdio.h>

/*
Usa o operador "*" para receber o endereço da variável
passado pelo operador "&" ler o conteúdo e modifica-lo diretamente na
memória
*/
void va_para_Leste(int *lat, int *lon)
{
	*lat = *lat + 1;
	*lon = *lon - 1;
}

int main ()
{
	int latitude = 32;
	int longitude = -64;

	printf("Ancorados em: [%i, %i]\n", latitude, longitude);


//Usa o operador "&" para buscar o endereço da variável na memória.

	va_para_Leste(&latitude, &longitude);


	printf("Navegando!!! Agora em: [%i, %i]\n", latitude, longitude);

	return 0;
}