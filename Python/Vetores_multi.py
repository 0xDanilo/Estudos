def imprimeMatrix (vetor_2d):
    for linhas in vetor_2d:
        for colunas in linhas:
            print(colunas, end=" ")
        print()

a = [[0, 1, 2, 3],
    [4, 5, 6, 7],   
    [8, 9, 10, 11]]

imprimeMatrix(a)

