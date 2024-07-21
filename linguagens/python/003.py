""" Faça um programa que leia um ângulo qualquer e mostre na tela o valor do seno, cosseno e tangente desse ângulo. Acesse o código """
       

from math import sin, radians, cos, tan

angulo = int(input('Digite o angulo que você deseja: '))
seno = sin(radians(angulo))
coseno = cos(radians(angulo))
tangente = tan(radians(angulo))

print(f'O seno do angulo de {angulo}º é {seno:.2f}.\
\nO coseno do angulo de {angulo}º é {coseno:.2f}.\
\nA tangente do angulo de {angulo}º é {tangente:.2f} ')