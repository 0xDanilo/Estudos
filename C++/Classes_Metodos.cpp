#include <cstdio>

struct RelogioDoLongoAgora {
    int ano;

    void adicionar_ano() {
        ano++;
    }
};

int main() {
    RelogioDoLongoAgora relogio;
    relogio.ano = 2020;

    relogio.adicionar_ano();
    printf("Ano: %d\n", relogio.ano);
    
    relogio.adicionar_ano();
    printf("Ano: %d\n", relogio.ano);

    relogio.adicionar_ano();
    printf("Ano: %d\n", relogio.ano);


    return 0;
}

