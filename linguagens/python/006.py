

nome = str(input('Nome completo: ')).strip().title()
primeiro = nome[:nome.find(' ')]
ultimo = nome[nome.rfind(' '):]
maiusculo = nome.upper()
minusculo = nome.lower()
espacos = nome.count(' ')
letras = len(nome) - espacos

print(f'Primeiro nome: {primeiro}\
       \nUltimo nome: {ultimo}\
       \nMaiusculo: {maiusculo}\
       \nMinusculo: {minusculo}\
       \nQuatidade de letras: {letras}')