
let frase = 'Somos todos homens fortes'.toLowerCase()

let frase1 = frase.split('o').length - 1/* Conta o número de 'o' */
let frase2 = frase.split('o')/* Remove os 'o' da frase e transforma em lista */
let frase3 = frase2.join('')/* transforma a lista em string com um delimitador entre os elemnetos */

console.log(frase1)
console.log(frase2)
console.log(frase3)