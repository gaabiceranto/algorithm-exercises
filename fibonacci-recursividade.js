const fibonacci = (posicao) => {
    let f1 = 0;
    let f2 = 1;
    let numero = 0;


    if (posicao ===1){
        numero = 1;
    } else
    if (posicao>1) {
        numero = fibonacci(posicao - 1) + fibonacci (posicao - 2);
    }

    return numero;
}

const posicao = 11;
// console.log (fibonacci (posicao));

let result = []

for (let index = 0; index < posicao; index++) {
    result.push (fibonacci (index));
    
}
console.log(result.join());