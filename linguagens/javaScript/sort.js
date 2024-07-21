let aluno1 = 'João'
let aluno2 = 'Natalia'
let aluno3 = 'Léo'

let alunos = []

if (aluno1) alunos.push(aluno1)
if (aluno2) alunos.push(aluno2)
if (aluno3) alunos.push(aluno3)

alunos.sort(() => Math.random() - 0.5)

console.log(alunos)