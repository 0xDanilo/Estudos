import matplotlib.pyplot as grafico 
import numpy as np 
  
# Cria X e Y 
x = np.linspace(-2, 10, 100)

#equação que será representada no grafico: 
y = x**2
z = x**3


tamanhoTela = grafico.figure(figsize = (10, 5)) 

# Cria o grafico:
grafico.plot(x, y, label='Equação quadrática')
grafico.plot(x, z, label='Equação cúbica') 
grafico.xlim([-5, 5]) 
grafico.ylim([-5, 5])
grafico.grid(True) 
grafico.axhline(y=0, color='k')
grafico.axvline(x=0, color='k')
grafico.ylabel('X')
grafico.xlabel('Y')
grafico.legend(loc='upper left')

  

# Exibe o gráfico
grafico.show() 
