frase = 'Eu gosto de estudar programação todos os dias'.strip().lower()
frase = frase.replace('ã', 'a')
frase = frase.replace('â', 'a')
frase = frase.replace('á', 'a')
frase = frase.replace('à', 'a')

qttd = frase.count('a')
primeira = frase.find('a') + 1
ultima = frase.rfind('a') + 1

print(f'Existem {qttd} de letras "a" no texto\
      \nA primeira letra se encontra na posição {primeira}\
      \nA ultima letra se encontra na posição {ultima}')