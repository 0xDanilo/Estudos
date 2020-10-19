#Dependências
import numpy as np
from functools import reduce

# Evita a notação cientifica:
np.set_printoptions(suppress=True) 

# Carrega os dados da amostra e armazena em um array
# Substitua o 'questionario.txt' pelo caminho completo para o arquivo
amostra = np.array([line.split() for line in open('questionario.txt')])

# Seleciona a coluna excluindo o título e converte para "float"
colunaIdades = amostra[1::,3].astype(np.float)

# Conta o numero de elementos na coluna e usa como base para o cálculo da frequência
n = len(colunaIdades)

# Variáveis para armazenar os resultados 
frequenciaRelativa = []
frequenciaAcumulada = []
idadesAmostra = []

# Loop que alimentas as listas
for idade in range(17, 26):
    idadesAmostra.append(idade)
    quantidade = np.count_nonzero(colunaIdades == idade)
    frequenciaRelativa.append(round(quantidade/n, 3))
    frequenciaAcumulada.append(reduce(lambda x, y: round((x + y), 3), frequenciaRelativa))

# Concatena todos os resultados em uma unica matriz 3 x 9
unicoArray = np.concatenate((idadesAmostra, frequenciaRelativa, frequenciaAcumulada)).reshape(3, 9)

# Imprime os resultados
print(f'\nFrequência Relativa e Acumulada para as idades:\n')
print(unicoArray)
print(f'\n')