#include <stdio.h>
#include <string.h>

char musicas [] [80] = {
	"Another Brick in the Wall",
	"Someone I used to know",
	"Do the Evolution",
	"Killing in the Name",
	"Loose yourself to Dance",
};

void procurar_musica(char buscar_por[]) {
	int i;
	
	for (i = 0; i < 5; i++) {
		if (strstr(musicas[i], buscar_por)) 
			printf("Musica %i: '%s'\n", i, musicas[i]);
	}
}

int main() {
	char buscar_por[80];
	printf("Digite o nome de uma música: ");
	scanf("%79s", buscar_por);
	procurar_musica(buscar_por);

	return 0;
}