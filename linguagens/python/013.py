
LIMITE = 80
velocidade = int(input('Velocidade (Km/h): '))

if velocidade > LIMITE:
     print(f'Utrapassou o limite de velocidade!')
     
     if velocidade <= (LIMITE * 1.1):
          print(f'Valor da multa: R$163.50')

     elif velocidade > (LIMITE * 1.1):
          print(f'Valor da multa: {163.50 + ((velocidade - (LIMITE * 1.1)) * 15)}')
   
else:
     print('Não utrapassou o limite de velocidade')