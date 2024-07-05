function numeroReal(res){
    let numero = document.getElementById('numeroId').value
    res.innerHTML = `Valor inteiro é ${parseInt(numero)}`
}

function hipotenusa(opo, adj, res){
    let adjacente = Number(adj.value)
    let oposto = Number(opo.value)
    res.innerHTML = `Hipotenusa = ${((oposto**2 + adjacente**2) **0.5).toFixed(2)}`
}

function angulo(valor, res){
    let angulo = Number(valor.value)
    let radianos = angulo*3.141592653/180

    let seno = radianos - (radianos**3/6) + (radianos**5/120) - (radianos**7/5040)
    let cosseno = 1 - (radianos**2/2) + (radianos**4/24) - (radianos**6/720)
    let tangente = seno/cosseno


    res.innerHTML =  `Seno = ${seno.toFixed(3)}<br>Cosseno = ${cosseno.toFixed(3)}<br>Tangente = ${tangente.toFixed(3)}`
}