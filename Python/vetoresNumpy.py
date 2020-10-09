import numpy as np

elementos = np.array([[1, 0, 0], 
                      [0, 2, 2],
                      [3, 1, 0]])

print(f'Matriz:\n {elementos}')

# Verifica em quais posições o número "2" é encontrado
# e retonar "True" para elas. 
print(f'\nRetorne "True" para as posições ainda o elemento "2" for encontrado: \n{elementos == 2}')

print(f'\nA matriz possui {elementos.ndim} dimensões e {elementos.shape} posições.')

#Selecionando linhas e colunas com slicing 
print(f'Elementos da segunda linha: {elementos[1:2]}')
print(f'Elementos da segunda coluna: {elementos[:, 1]}')

