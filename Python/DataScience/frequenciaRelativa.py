import numpy as np

# Carrega os dados da amostra e armazena em um array
#substitua o 'questionario.txt' pelo caminho completo para o arquivo
questionario = np.array([line.split() for line in open('questionario.txt')])

# Seleciona a coluna do gênero, excluindo o título da coluna
colunaGenero = questionario[1::,2]

# Masculino = np.unique(colunaGenero, return_counts=True)
# Conta o número de ocorrências para os respectivos gêneros:
masculino = np.count_nonzero(colunaGenero == "M")
feminino = np.count_nonzero(colunaGenero == "F")

# Conta a quantidade de elementos e armazena em "n" para o cálculo
n = len(colunaGenero)
# Cálcula a frequência relativa
frequenciaRelativaM = masculino/n
frequenciaRelativaF = feminino/n

#Imprime a amostra e o resultado:
print(f'\n{colunaGenero}')
print(f'\nA Frequência Relativa para o gênero feminino é {frequenciaRelativaF} e para o masculino {frequenciaRelativaM}.\n')

