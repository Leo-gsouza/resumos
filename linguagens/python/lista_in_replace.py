texto = 'Gostaria de tomar um suco de uva e comer uma laranja'

acida_comum = {
    'limão':'maça', 'laranja':'banana'
}

for acido, comum in acida_comum.items():
    texto = texto.replace(acido, comum)

print(texto)