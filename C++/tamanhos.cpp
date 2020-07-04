#include <cstddef>
#include <cstdio>

int main() {
	size_t tamanho_c = sizeof(char);
	printf("char:%zd\n", tamanho_c);

	size_t tamanho_s = sizeof(short);
	printf("short: %zd\n", tamanho_s);

	size_t tamanho_i = sizeof(int);
	printf("int: %zd\n", tamanho_i);

	size_t tamanho_l = sizeof(long);
	printf("long: %zd\n", tamanho_l);

	size_t tamanho_ll = sizeof(long long);
	printf("long long: %zd\n", tamanho_ll);

	return 0;
}