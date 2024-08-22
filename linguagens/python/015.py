distancia = int(input('Distancia da viagem: '))

if distancia <= 200:
    valor = distancia * 0.50
else:
    valor = distancia * 0.45

print(f'Valor da passagem = R${valor:.2f}')