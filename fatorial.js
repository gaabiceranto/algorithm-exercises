
/* Seja n um número natural, tal que n >= 2, chama-se fatorial de n o produto de todos os números naturais consecutivos de n até 1.

Implemente um programa (utilizando laços) que receba um número e retorne o fatorial desse número.*/

var prompt = require('prompt-sync')();


var fatorial = parseInt (prompt('Digite um número para fatoração:'));
var resultado = fatorial;


for (let index = 1; index < fatorial; index++) {
    resultado *= index;
    
}
console.log(resultado);