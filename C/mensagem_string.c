/*
	Para rodar esse programa, utilize:
	./mensagem_string < segredo.txt > mensagem1.txt 2> mensagem2.txt

	O programa recebe a entrada de dados do 'segredo.txt' e separa
	as mensagens em dois arquivos .txt
 */

#include <stdio.h>

int main() {
	char palavra [10];
	int i = 0;

	while (scanf("%9s", palavra) == 1) {
		i = i +1 ;

		if (i % 2) 
			fprintf(stdout, "%s\n", palavra);
		 else 
			fprintf(stderr, "%s\n", palavra);
		
	}

	return 0;
}