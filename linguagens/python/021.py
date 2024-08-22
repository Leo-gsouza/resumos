numero = int(input('Digite um número: '))

conversao = int(input('Qual a base de conversão: \
                      \n[1]Binário \n[2]Octal\
                      \n[3]Hexadecimal \n>>'))

if conversao == 1:
    convertido = bin(numero)[2:]
    info = 'binário'
elif conversao == 2:
    convertido = oct(numero)[2:]
    info = 'octal'
elif conversao == 3:
    convertido = hex(numero)[2:]
    info = 'hexadecimal'

print(f'O número {numero} em {info} é {convertido}')
