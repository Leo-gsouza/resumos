from random import randint

numero = int(input('Digite um numero entre 0 e 5: '))
computador = randint(0,5)

print(f'Computador escolheu = {computador}\
      \nJogador escolheu = {numero}')

if numero == computador:
    print('Acertou!')
else:
    print('Errou!')