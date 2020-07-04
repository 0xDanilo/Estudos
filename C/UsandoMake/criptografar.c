#include "criptografar.h"

void criptografar(char *mensagem) {
	char c;
	while (*mensagem) {
		*mensagem = *mensagem ^ 31;
		mensagem++;
	}
}