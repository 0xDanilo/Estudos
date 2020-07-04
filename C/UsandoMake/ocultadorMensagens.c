#include <stdio.h>
#include "criptografar.h"

int main() {
	char msg[80];
	while (fgets(msg, 80, stdin)) {
		criptografar(msg);
		printf("Texto criptografado: %s\n", msg);
	}
}