# Exemplo 6 da página 7 do livro
# "Álgebra Linear com Aplicações" do autor
# Howard Anton.

# Dependências
import numpy as np
from fractions import Fraction

print("Equações:\n x + y + 2z = 9\n 2x + 4y -3z = 1\n 3x + 6y - 5z = 0")

#  Cria a matriz inicial a partiz das equações
matriz_aumentada = np.array([[1,1,2,9],
                            [2,4,-3,1],
                            [3,6,-5,0]])

print(f'\nMatriz aumentada:\n {matriz_aumentada}')

#Cria as variáveis com o linhas para as manipulações:
primeira_linha = matriz_aumentada[0]
segunda_linha = matriz_aumentada[1]
terceira_linha = matriz_aumentada[2]

# Frações que serão usadas nas operações:
um_meio = Fraction(1,2)
onze_dois = Fraction(11,2)
sete_dois = Fraction(7,2)

# Desse ponto em diante ocorrem as tranformações 
# a fim de simplificar a matriz:
segunda_linha = (-2* primeira_linha) + segunda_linha
terceira_linha = (-3*primeira_linha) + terceira_linha
segunda_linha = um_meio*segunda_linha
terceira_linha = ((-3*segunda_linha)+terceira_linha) * -2
primeira_linha = (-segunda_linha)+primeira_linha
primeira_linha = (-onze_dois*terceira_linha) + primeira_linha
segunda_linha = (sete_dois*terceira_linha) + segunda_linha 

# Monta a matriz com o resultado das tranformações:
matriz_transformada = np.array([primeira_linha,
                                segunda_linha,
                                terceira_linha])

## Arredondando as frações:
# O array foi convertido para tipo inteiro antes do arredondamento.
matriz_final = np.around(matriz_transformada.astype(np.int))
print(f'\nMatriz final:\n{matriz_final}')
