// const fibonacci = (posicao) => {
//     let f1 = 0;
//     let f2 = 1;
//     let numero = 0;


//     if (posicao ===1){
//         numero = 1;
//     }

//     for (let index = 1; index < posicao; index++) {
//         numero = f1 + f2;
//         f1 = f2;
//         f2 = numero;
//     }
//     return numero;
// }


// const posicao = 11;
// for (let index = 0; index < posicao; index++) {
//     console.log (fibonacci (index));
    
// }

function somatorio (num) {
    if (num === 0) return 0;
    else {
      return num + somatorio(num - 1);
  }
    }
    
   
  console.log(somatorio(5));