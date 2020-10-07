import numpy as vetor

a = vetor.array([7, 6, 5, 4, 3, 2, 1])

print('Vetor Original:\n'+str(a))
print('Vetor Organizado:\n'+str(vetor.sort(a)))
print('Indices modificados:\n'+str(vetor.argsort(a)))


#Uma linha venenosa, a modificar...
#print(str(a)+"\n"+str(vetor.sort(a))+"\n"+str(vetor.argsort(a)))