//map - retorna um 

// const numbers = [1,2,3,5,10,20];

// const doubleNumbers = numbers.map((item) =>{
//     return item *2;
// });

// console.log(numbers);
// console.log(doubleNumbers);

const alunos = [
    {nome: "Carlos", sobrenome: "teste", idade: 18},
    {nome: "Julia",sobrenome: "teste", idade: 28},
    {nome: "Pedro",sobrenome: "teste", idade: 19},
    {nome: "Aline",sobrenome: "teste", idade: 25},
    {nome: "Joana",sobrenome: "teste", idade: 32},
    {nome: "Maisa",sobrenome: "teste", idade: 30}
];

const lista = alunos.map(aluno => {
    aluno.nomeCompleto = `${aluno.nome} ${aluno.sobrenome}`;
    return aluno;
});


console.log(typeof lista);
console.log(typeof alunos);                       
console.log(typeof aluno);                       

// construir um array