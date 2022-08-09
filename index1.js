
var data_Evento = console.log ("digite a data do evento");

let data_Atual = new Date (2022,9,8);

if (data_Evento >= data_Atual) {
	
	var data_Nascimento = console.log ("digite o ano do seu Nascimento");
	var ano_atual = new Date ().getFullYear();
	var idade = (ano_atual - data_Nascimento);
	
	if (idade >= 18) {
	
		let participantes = ["John","João","Jhonny","Jão"];
		let quant_participantes	= participantes.lenght;
		console.log (quant_participantes);

		if (quant_participantes < 100) {
			
			let nome = console.log ("Digite seu nome");	
			participantes.push (nome); 
			console.log (quant_participantes);
			
			for (let indice = 0; indice < quant_participantes; indice++) {
				const lista_Participantes = quant_participantes[indice];
				console.log(lista_Participantes);
			}
				console.log ("parabéns, seja bem vindo ao evento!")
		}else 
		{console.log ("cadastro falhou, evento lotado")} 
	}else
	{console.log ("idade não permitida")}
}else
{console.log ("data inválida")}

