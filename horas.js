/*
  Faça um programa que converta da notação de 24 horas para a notação de 12 horas.
  Por exemplo, o programa deve converter 14:25 em 2:25 P.M. 
  A entrada é dada em dois inteiros. 
  Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída.
*/

var prompt = require('prompt-sync')();
let hora = parseInt (prompt('Digite o hora:'));
let minutos = parseInt (prompt('Digite os minutos:'));
let formato = "";
let novoHorario = 0;


let conversao = (h) => {
    if (h>12){
    novoHorario = h -= 12;
    formato = "pm"
    } else {
        novoHorario = h;
        formato = "am"
    }

    return novoHorario, formato; 
}
conversao (hora)

let saida = (h,m,f) => console.log(`O horário ${hora}:${minutos} no formato 12h é ${novoHorario}:${minutos}${formato}`);
saida (hora,minutos,formato)
