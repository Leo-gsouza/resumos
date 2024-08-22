n1 = int(input('Digite o 1º Número:'))
n2 = int(input('Digite o 2º Número:'))
n3 = int(input('Digite o 3º Número:'))

""" Solução mais complexa """
if n1 > n2 and n1 > n3:
    maior = n1
elif n2 > n1 and n2 > n3:
    maior = n2
else:
    maior = n3
print(maior)

""" Solução simples """
maior = max(n1, n2, n3)
print(maior)

""" Usando Lista """
numeros = [n1, n2, n3]
maior = max(numeros)
print(maior)

