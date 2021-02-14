//01 declare uma variavel do nom weight

let weight;

//02 que tipo de dado é a variavel acima?

console.log(`Weight é uma variavel do tipo ${typeof weight}`)

//03 declare variaveis com os valores informados

let name = "Miguel"
let age = 18
let stars = 4.5
let isSubscribed = true

//04  a variavel student abaixo é de que tipo de dados?
// - atribua as propriedades das variaveis do exercicio 3 e mostre no console

const student = {
    name: "Miguel",
    age: 18,
    peso: 68.5,
    isSubscribed:true
}

console.log(`${student.name} de idade ${student.age} Peso ${student.stars}`)


//05 declare um array

let students = []
students = [student]
//07 adicionar novo estudante

const newStudent = {
    name: "john",
    age: 19,
    peso: 78.2,
    isSubscribed:true
}

students[1] = [newStudent]

console.log(students)