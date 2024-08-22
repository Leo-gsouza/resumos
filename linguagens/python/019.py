r1 = int(input('1ª reta: '))
r2 = int(input('2ª reta: '))
r3 = int(input('3ª reta: '))

if r1 + r2 < r3 or r1 + r3 < r2 or r2 + r3 < r1:
    resultado = f'Não é'
else:
    resultado = f'É'

print(f'{resultado} possível formar um triângulo ')
