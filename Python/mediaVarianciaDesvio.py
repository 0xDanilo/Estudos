import numpy as np
import matplotlib.pyplot as plt

Dados = np.array( [[1, 3, 5],
                   [1, 1, 1],
                   [0, 2, 4]])

#   print(Dados)
#   print(np.average(Dados))
#   print(np.var(Dados))
#   print(np.std(Dados))

########################################
##  Caso queira ver o resultado das operações acima,
##  descomente-as e comente TUDO daqui para baixo,
##  evitando que o grafico seja gerado.
#######################################

media = np.average(Dados) 
desvioPadrao = np.std(Dados) 
#   A variável abaixo controla a quantidade de vetores
#   gerados automaticamente pela função "np.random.normal"
numeroVetores = 100 

#   Gerando o gráfico:
graficoBarras = np.random.normal(media, desvioPadrao, numeroVetores) 
print(graficoBarras)
plt.hist(graficoBarras, edgecolor = "white") #"white" foi um hack que encontrei para separar as barras 
plt.show()
