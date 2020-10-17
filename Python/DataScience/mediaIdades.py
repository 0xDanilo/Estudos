import numpy as np

# Carrega os dados da amostra e armazena em um array
# Substitua o 'questionario.txt' pelo caminho completo para o arquivo
questionario = np.array([line.split() for line in open('questionario.txt')])

#Seleciona a coluna excluindo o título e converte para "float"
colunaIdades = questionario[1::,3].astype(np.float)

#Imprime a coluna
print(f'\n{colunaIdades}')

#Calcula e exibe os resultados
mediaIdades = np.average(colunaIdades)
print(f'\nA média das idades na amostra é: {mediaIdades}\n')
