valor_casa = float(input('Valor da casa: R$'))
salario = float(input('Salario: R$'))
anos = int(input('Anos pagando: '))*12

parcela = (valor_casa / anos)

info = 'superior' if parcela > salario*0.3 else 'inferior'
    
print(f'O valor da parcela R${parcela:.2f} é \
{info} a 30% do salario R${salario*0.3:.2f}')
