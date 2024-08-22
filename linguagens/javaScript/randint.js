
function getRandomInt(min, max) {
    // Certifique-se de que min e max são inteiros
    min = Math.ceil(min);
    max = Math.floor(max);
    aleatorio = Math.random()
    console.log(`min ${min}, max ${max}, ale${aleatorio}, ale*max-min ${aleatorio*(max-min+1)} `)
    console.log(`${aleatorio} * ${(max - min + 1)} + ${min}`)
    // Gera o número aleatório no intervalo [min, max]
    return Math.floor(aleatorio * (max - min + 1)) + min;
}

let numero = getRandomInt(30,60)

console.log(numero)