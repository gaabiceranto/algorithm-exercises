/*
Seja n um número natural, tal que n >= 2, chama-se fatorial de n o produto de todos os números naturais consecutivos de n até 1.
Implemente um programa (utilizando laços) que receba um número e retorne o fatorial desse número.
*/

// by Gabriela Ceranto

var prompt = require('prompt-sync')();
const num = parseInt (prompt('Digite um número para fatoração:'));

const fatoracao = (n) => {

    if ( n <=1 ) {
        return 1; 
    } else {        
        n = n * fatoracao(n - 1);}
    return n;
}

fatoracao (num);

console.log (`A Fatoração do número ${num} é ${fatoracao(num)}.`);