from random import randint

numero = randint(0, 9999)
unidade = numero // 1 % 10
dezena = numero // 10 % 10
centena = numero // 100 % 10
milhar = numero // 1000 % 10

print(f'Numero sorteado = {numero}\
      \nUnidade = {unidade}\
      \nDezena = {dezena}\
      \nCentena = {centena}\
      \nMilhar = {milhar}')
