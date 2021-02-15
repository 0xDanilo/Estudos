#include <stdio.h>

void f_static() {
    static int x = 5;
    printf("%d\n", x);
    x++;
}

void f_non_static() {
    int y = 10;
    printf("%d\n", y);
    y++;
} 

int main(void) {

    printf("Static keyword...\n");
    f_static();
    f_static();

    printf("Non static keyword,,,\n");
    f_non_static();
    f_non_static();

    return 0;
}
