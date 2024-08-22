numero = int(input('Digite um número: '))

conversao = int(input('Qual a base de conversão: \
                      \n[1]Binário \n[2]Octal\
                      \n[3]Hexadecimal \n>>'))

match conversao:
   case 1:
    convertido = bin(numero)[2:]
    info = 'binário'
   case 2:
    convertido = oct(numero)[2:]
    info = 'octal'
   case 3:
    convertido = hex(numero)[2:]
    info = 'hexadecimal'

print(f'O número {numero} em {info} é {convertido}')
