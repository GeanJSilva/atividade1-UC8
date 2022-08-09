
let peso_peca = 200;
console.log (peso_peca);

if (peso_peca > 100){
    let nome_peca= ("chave");
     
    if (nome_peca.length > 3 ){
        let espaco_caixa = ["martelo", "alicate"];
        let contador = espaco_caixa.length;
        
        if (contador < 10){
            espaco_caixa.push(nome_peca);
            console.log(espaco_caixa);
            console.log("Cadastro efetuado com sucesso!")

        }else
        {console.log ('caixa já lotada! impossivel prosseguir') }

    }else 
    {console.log ('nome incorreto')}

}else
{console.Log('Peso não permitido')}
    
    
    




