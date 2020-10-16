#Entendo as funções lambdas

#Função "somar": 
def somar_1(x, y):
    return x + y
#Passa os arguementos e imprime o resultado:
print(somar_1(5, 5))
#informação sobre a funcão "somar_1"
print(somar_1)

#Mesma idéia utilizando uma função lambda
somar_2 = lambda x, y: x + y
print(somar_2(5, 5))
print(somar_2)

#Equivalente de uma linha combinando "print()" e lambda:
print((lambda x, y: x + y)(5, 5))