#include <stdio.h>

typedef enum {
    PECAS, LIBRAS, PINTAS
} unidades_de_medida;

typedef union {
    short pecas;
    float peso;
    float volume;
}   quantidade;

typedef struct {
    const char *nome;
    const char *pais;
    quantidade quantia;
    unidades_de_medida unidades;
} pedido_frutas;

void display(pedido_frutas pedido) {
    printf("Esse pedido contem ");
    if (pedido.unidades == PINTAS)
    printf("%2.2f pintas de %s\n", pedido.quantia.volume, pedido.nome);

    else if (pedido.unidades == LIBRAS)
    printf("%2.2f lbs de %s\n", pedido.quantia.peso, pedido.nome);

    else 
    printf("%i peças %s\n", pedido.quantia.pecas, pedido.nome);
}

int main () {
    pedido_frutas macas = {"macas", "Inglaterra", .quantia.pecas=144, PECAS};

    pedido_frutas morangos = {"morangos", "Espanha", .quantia.peso=17.6, LIBRAS};

    pedido_frutas sl = {"suco de laranja", "EUA", .quantia.volume=10.5, PINTAS};

    display(macas);
    display(morangos);
    display(sl);

    return 0;
}