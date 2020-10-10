# Explorando alguns métodos do pacote numpy 
# relacionado a vetores.

import numpy as np

elementos = np.array([[1, 3, 1], 
                      [3, 2, 1],
                      [3, 1, 2]])

print(f'Matriz:\n {elementos}')

# Verifica em quais posições o número "2" é encontrado
# e retonar "True" para elas. 
encontraNumero2 = elementos == 2
print(f'\nRetorne "True" para as posições ainda o elemento "2" for encontrado: \n{encontraNumero2}')
# Verifica em quais posições o número "2" é encontrado
# e retonar "True" para elas. 
encontraNumero3 = elementos == 3
print(f'\nRetorne "True" para as posições ainda o elemento "3" for encontrado: \n{encontraNumero3}')
# Realiza a operação Booleana
print(f'\nOperação lógica "and" entre os dois vetores resultantes: \n {np.logical_and(encontraNumero2, encontraNumero3)}')

print(f'\nA matriz possui {elementos.ndim} dimensões e {elementos.shape} posições.')

# Selecionando linhas e colunas com slicing 
print(f'Elementos da segunda linha: {elementos[1:2]}')
print(f'Elementos da segunda coluna: {elementos[:, 1]}')

print(f'\nMédia: {round(np.average(elementos), 2)}')
print(f'Variância: {round(np.var(elementos), 2)}')
print(f'Desvio Padrão: {round(np.std(elementos), 2)}')

# redistribui os elementos de acordo com os eixos (axis)
# axis = 0, eixo "y"
print(f'\nRedistribua os elementos de acordo com o eixo "y":\n {np.sort(elementos, axis=0)}')
# axis = 0, eixo "x"
print(f'\nRedistribua os elementos de acordo com o eixo "x":\n {np.sort(elementos, axis=1)}')
