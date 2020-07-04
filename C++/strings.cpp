#include <cstdio>
#include <locale>

int main () {

    setlocale(LC_ALL, "Chinese");
	
    char ingles[] = "A book holds a house of gold.";
    printf("%s\n", ingles);
    //Não consgui imprimir a linha abaixo, ocorre um erro na hora de passar
    //para o 'printf' com '%s'
    //char16_t chines[] = u"\u4e66\u4e2d\u81ea\u6709\u9ec4\u91d1\u5c4b";
    //printf("%s \n", chines);
    printf("\u4e66\u4e2d\u81ea\u6709\u9ec4\u91d1\u5c4b\n");

    return 0;
}