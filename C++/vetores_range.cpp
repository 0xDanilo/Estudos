#include <cstdio>

int main () {
	unsigned long maximo = 0;
	unsigned long valores [] = {10, 50, 20, 40, 0};

//A parte que difere do exemplo anterior:
	for (unsigned long value : valores)
	{
		if (value > maximo) maximo = value;
	}

	printf("O valor máximo é %lu\n", maximo);

	return 0;
}