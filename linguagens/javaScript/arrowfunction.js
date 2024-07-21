/* Usando function e abrindo o bloco */
function soma1(a, b){
    return a + b
}
console.log(soma1(5,2))


/* Usando aroowfunction e abrindo o bloco */
const soma2 = (a,b) =>{
    return a + b
}
console.log(soma2(7,12))

/* Usando arrowfunction sem abrir bloco */
const soma3 =(a,b) => a+b
console.log(soma3(14,21))