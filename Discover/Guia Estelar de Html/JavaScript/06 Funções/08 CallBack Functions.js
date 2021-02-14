function sayMyname(name){
    console.log(name);
    name()//executa o parametro
}

sayMyname(
    () => {
        console.log('estou em uma callback')//envia essa funcao para o paramentro da funcao sayMyname()
    }
)