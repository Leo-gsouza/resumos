function ver(resolucao){
    resolucao.style.display == 'block' ? resolucao.style.display = 'none' : resolucao.style.display = 'block'
}

function ex001(res){
    let numero = document.getElementById('numeroId').value
    res.innerHTML = `Valor inteiro é ${parseInt(numero)}`
}

function ex002(opo, adj, res){
    let adjacente = Number(adj.value)
    let oposto = Number(opo.value)
    res.innerHTML = `Hipotenusa = ${((oposto**2 + adjacente**2) **0.5).toFixed(2)}`
}

function ex003(valor, res){
    let angulo = Number(valor.value)
    let radianos = angulo*3.141592653/180

    let seno = radianos - (radianos**3/6) + (radianos**5/120) - (radianos**7/5040)
    let cosseno = 1 - (radianos**2/2) + (radianos**4/24) - (radianos**6/720)
    let tangente = seno/cosseno


    res.innerHTML =  `Seno = ${seno.toFixed(3)}<br>Cosseno = ${cosseno.toFixed(3)}<br>Tangente = ${tangente.toFixed(3)}`
}

function ex004(resultado){
    const aluno1 = document.getElementById('aluno1Id').value
    const aluno2 = document.getElementById('aluno2Id').value
    const aluno3 = document.getElementById('aluno3Id').value
    const aluno4 = document.getElementById('aluno4Id').value

    const alunos = []
    if (aluno1) alunos.push(aluno1)
    if (aluno2) alunos.push(aluno2)
    if (aluno3) alunos.push(aluno3)
    if (aluno4) alunos.push(aluno4)

    if (alunos.length > 0){
        const indice = Math.floor(Math.random() * alunos.length)
        const sorteado = alunos[indice]
        resultado.innerHTML =  `${sorteado}`
    }
}

function ex005(resultado){
    const aluno1 = document.getElementById('aluno1Id').value
    const aluno2 = document.getElementById('aluno2Id').value
    const aluno3 = document.getElementById('aluno3Id').value
    const aluno4 = document.getElementById('aluno4Id').value

    const alunos = []
    if (aluno1) alunos.push(aluno1)
    if (aluno2) alunos.push(aluno2)
    if (aluno3) alunos.push(aluno3)
    if (aluno4) alunos.push(aluno4)

    alunos.sort(() => Math.random() - 0.5)

    resultado.innerHTML = `${alunos}`
}

function ex006(resultado){
    const nome = document.getElementById('nomeCompleto').value
    
    const primeiro = nome.slice(0, nome.indexOf(' '))
    const ultimo = nome.slice(nome.lastIndexOf(' ') + 1)
    const maiusculo = nome.toUpperCase()
    const minusculo = nome.toLowerCase()
    const espacos = nome.split(' ').length -1
    const caracteres = nome.length - espacos

    resultado.innerHTML = `Primeiro nome: ${primeiro} \
    <br>Ultimo nome: ${ultimo} <br>Maiusculo: ${maiusculo}\
    <br>Minusculo: ${minusculo} <br>Letras: ${caracteres}`
}