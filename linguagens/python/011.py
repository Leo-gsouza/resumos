
nome = str(input('Nome completo: ')).strip().title()

primeiro = nome.find(' ')
ultimo = nome.rfind(' ') + 1

print(nome[:primeiro])
print(nome[ultimo:])
