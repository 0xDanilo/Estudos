ocultadorMensagens.o: ocultadorMensagens.c criptografar.h
	gcc -c ocultadorMensagens.c

criptografar.o: criptografar.c criptografar.h
	gcc -c criptografar.c

ocultadorMensagens: ocultadorMensagens.o criptografar.o
	gcc ocultadorMensagens.o criptografar.o -o ocultadorMensagens