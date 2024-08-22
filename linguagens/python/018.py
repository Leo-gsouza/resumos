salario = float(input('Informe o salário: R$'))

if salario < 1250:
    novo_salario = salario * 1.15
else:
    novo_salario = salario * 1.1


novo_salario = f'R${novo_salario:.2f}'
novo_salario = novo_salario.replace('.',',')

print(f'Novo salario é de {novo_salario}')
