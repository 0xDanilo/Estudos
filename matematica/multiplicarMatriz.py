import numpy as np

A = np.array( [[1, 2, 3],
               [3, 2, 1],
               [3, 1, 2]])

B = np.array( [[1, 2, 3],
               [1, 2, 3],
               [3, 1, 2]])

C = np.array( [[1, 2, 3]])

print(A*B)

print(A*C)
