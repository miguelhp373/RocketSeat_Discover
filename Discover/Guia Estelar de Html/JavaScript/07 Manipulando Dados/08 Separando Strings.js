//Separe um texto que contem espaços, em um novo array onde cada texto é posição do Array. Depois disso, transforme o array transforme o array em um texto e onde eram espaço, coloque _

let phrase = 'Olá meu nome é miguel';
let Myarr = phrase.split(' ');//transforma a frase em array
let AddUndeline = Myarr.join('_')//junta o Myarr que é um array e coloca nos espaços undelines
console.log(AddUndeline)//mostra a frase transformada

