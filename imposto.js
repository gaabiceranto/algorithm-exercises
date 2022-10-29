/*
  Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. A função “altera” o valor de custo para incluir o imposto sobre vendas.
*/

var prompt = require('prompt-sync')();
let n1 = parseInt (prompt('Digite o valor:'));
let n2 = parseInt (prompt('Digite a porcentagem de imposto:'));


let somaImposto = (custo, taxaImposto) => console.log(`O valor com o imposto de ${taxaImposto}% é R$${((taxaImposto/100)*custo)+custo}`); 

somaImposto(n1,n2);

