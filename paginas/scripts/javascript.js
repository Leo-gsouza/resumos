function ver(resolucao){
    resolucao.style.display == 'block' ? resolucao.style.display = 'none' : resolucao.style.display = 'block'
}

function ex001(res){
    let numero = document.getElementById('numeroId').value
    res.style.display = 'block'
    res.innerHTML = `Valor inteiro é ${parseInt(numero)}`
}

function ex002(opo, adj, res){
    let adjacente = Number(adj.value)
    let oposto = Number(opo.value)
    res.style.display = 'block'
    res.innerHTML = `Hipotenusa = ${((oposto**2 + adjacente**2) **0.5).toFixed(2)}`
}

function ex003(valor, res){
    let angulo = Number(valor.value)
    let radianos = angulo*3.141592653/180

    let seno = radianos - (radianos**3/6) + (radianos**5/120) - (radianos**7/5040)
    let cosseno = 1 - (radianos**2/2) + (radianos**4/24) - (radianos**6/720)
    let tangente = seno/cosseno
    res.style.display = 'block'


    res.innerHTML =  `Seno = ${seno.toFixed(3)}<br>Cosseno = ${cosseno.toFixed(3)}<br>Tangente = ${tangente.toFixed(3)}`
}

function ex004(resultado){
    const aluno1 = document.getElementById('aluno1Id').value
    const aluno2 = document.getElementById('aluno2Id').value
    const aluno3 = document.getElementById('aluno3Id').value
    const aluno4 = document.getElementById('aluno4Id').value
    resultado.style.display = 'block'

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
    resultado.style.display = 'block'

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
    resultado.style.display = 'block'

    resultado.innerHTML = `Primeiro nome: ${primeiro} \
    <br>Ultimo nome: ${ultimo} <br>Maiusculo: ${maiusculo}\
    <br>Minusculo: ${minusculo} <br>Letras: ${caracteres}`
}

function ex007(resultado){
    let numero = document.getElementById('numeroId7').value
    let unidade = Math.floor(numero / 1) % 10
    let dezena = Math.floor(numero / 10) % 10
    let centena = Math.floor(numero / 100) % 10
    let milhar = Math.floor(numero/1000) % 10
    resultado.style.display = 'block'

    resultado.innerHTML = `Unidade = ${unidade}\
    <br>Dezena = ${dezena}\
    <br>Centena = ${centena}\
    <br>Milhar = ${milhar}`
}

function ex008(cid, resultado){
    let cidade = String(cid.value)
    resultado.style.display = 'block'
    if (cidade.substring(0,6).toUpperCase() == 'SANTO '){
        resultado.innerHTML = `Sim! a cidade começa com Santo`
    }else{resultado.innerHTML = `A cidade não começa com Santo`}
}

function ex009(name, resultado){
    let nome = String(name.value).toUpperCase()
    let separado = nome.split(" ")
    let ultimo = separado[separado.length - 1]
    resultado.style.display = 'block'

    if (ultimo == 'SILVA'){
        resultado.innerHTML = `Sim! Tem Silva no nome`
    }else{
        if (nome.includes(' SILVA ')){
            resultado.innerHTML = `Sim! Tem Silva no nome`
        }else{
            resultado.innerHTML = `Não tem Silva no nome`
        }
    }
}

function ex010(resultado){
    let frase = document.getElementById('fraseId10').value.toLowerCase()
    frase = frase.replace(/[âáãà]/g, 'a')
    frase = frase.replace(/ /g, '')
    let letraA = frase.split('a').length - 1
    let primeira = frase.indexOf('a') + 1
    let ultima = frase.lastIndexOf('a') + 1 
    resultado.style.display = 'block'

    resultado.innerHTML = `<p>Quantidade de letras 'a' = ${letraA}</p>\
    <p>1ª letra 'a' está na posição ${primeira}</p>\
    <p>Ultima letra 'a' está na posição ${ultima}</p>` 
}


 function ex011(name, resultado){
    let nome = String(name.value)
    let separado = nome.split(" ")
    let primeiro = separado[0]
    let ultimo = separado[separado.length - 1]  
    resultado.style.display = 'block'

    resultado.innerHTML = `<p>Primeiro: ${primeiro}</p>\
    <p>Ultimo: ${ultimo}</p>`
 }

 function ex012(numero, resultado){
    let valor = Number(numero.value)
    let computador = Math.floor(Math.random() * 6)
    resultado.style.display = 'block'

    if (valor == computador){
        resultado.innerHTML = `<p>Ganhou!</p>
        <p>Jogador jogou ${valor}</p>
        <p>Computador jogou ${computador}</p>`
    }else{
        resultado.innerHTML = `<p>Perdeu!</p>
        <p>Jogador jogou ${valor}</p>
        <p>Computador jogou ${computador}</p>`
    }

 }