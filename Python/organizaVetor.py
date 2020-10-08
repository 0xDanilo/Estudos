import numpy as vetor

a = vetor.array([7, 6, 5, 4, 3, 2, 1])

print(f'Vetor Original:\n {a}')
print(f'Vetor Organizado:\n {vetor.sort(a)}')
print(f'Indices modificados:\n {vetor.argsort(a)}')


#Uma linha venenosa, a modificar...
#print(str(a)+"\n"+str(vetor.sort(a))+"\n"+str(vetor.argsort(a)))