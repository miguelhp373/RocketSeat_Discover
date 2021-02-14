let Tech = ['html','css','js']; 
//adicionar um item no fim
Tech.push('reactjs');

//adicionar no começo
Tech.unshift('Node.js')

//remover no fim
//Tech.pop()

//remover no começo
//Tech.shift()

//pegar somente alguns elementos do array
//console.log(Tech.slice(1,3))//retorna ['css','js']

//remover 1 ou mais items em qualquer posição do array
//Tech.splice(1,2)//remove 2 items na posição dois

//encontrar a posição de um elemento no array
let Indexposition = Tech.indexOf('css')//busca css
Tech.splice(Indexposition,1)//usa o indexposition e remove o item encontrado

console.log(Tech)