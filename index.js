let quantidade_alunos = 20;

for (let contador = 0; contador < quantidade_alunos; contador++){
    console.log (contador)

    if (contador == 0 ){
        console.log ('Zero')
    }

    if (contador % 2 == 0 && contador != 0 ) {
        console.log ('par')
    }else{
        console.log ('impar')
    }

}