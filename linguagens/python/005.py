from random import shuffle

alunos = [str(input('1º Aluno: ')), 
          str(input('2º Aluno: ')), 
          str(input('3º Aluno: ')),
          str(input('4º Aluno: '))]

shuffle(alunos)

c = 1

for a in alunos:
    print(f'{c}º Aluno é {a}')
    c += 1