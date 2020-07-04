#include <stdio.h>

void biscoito_sorte(char msg[]) 
{
	printf("A mensagem diz: %s\n", msg);

	printf("Essa mensagem ocupa %lu bytes e na verdade é o tamanho apenas do primeiro caractere.\n", sizeof(msg));
}

int main ()
{
	char citacao[] = "Biscoitos engordam.";
	biscoito_sorte(citacao);

	printf("Essa mensagem foi passada como um Array e está armazenada em: %p\n", citacao);

	printf("Tamanho real do Array.  %lu\n", sizeof(citacao));


	return 0;
}