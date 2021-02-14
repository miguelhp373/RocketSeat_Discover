/* 
    function() constructor

    * expressão new
    *criar um novo objeto
    *this keyword

*/

function Person(name){
    this.name = name
    this.walk = function () {
        return this.name + ' Está Andando'
      }
}

const Mayk = new Person('Maik');
const Diego = new Person('Diego');

console.log(Mayk.walk())
console.log(Diego.walk())