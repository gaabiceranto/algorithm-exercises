/* Seguindo algumas regras para indentificar os números primos.
- o número 1 não é primo.
- o único número primo par é o 2
- o único número primo divisivel por 3 é o 3.
- o único número primo divisivel por 5 é o 5.
- o único número primo divisivel por 7 é o 7.
*/

let num=0;

// for (let index = 0; num <= 100; index++) {
//     if(num == 2 || num==3 || num==5 || num==7){
//         console.log (num); 
//         num ++;
//     }else if (num %2!=0 && num %3!=0 && num %5!=0 && num %7!=0 && num!=1){
//         console.log (num);
//         num ++;
//     } else {
//         num++;
//     }
// }

while (num <=100) {
    if(num == 2 || num==3 || num==5 || num==7){
        console.log (num); 
        num ++;
    }else if (num %2!=0 && num %3!=0 && num %5!=0 && num %7!=0 && num!=1){
        console.log (num);
        num ++;
    } else {
        num++;
    }
    
}

