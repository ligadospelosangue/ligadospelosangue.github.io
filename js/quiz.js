// Variáveis
var pos = 0, test, question, chA, chB, correct = 0;
// Array com as pesguntas, opções e respostas
var questions = [
    [ "Tem entre 16 e 69 anos?", "Sim", "Não", "Sim" ],
	[ "Pesa mais de 50kg?", "Sim", "Não", "Sim" ],
	[ "Teve Hepatite após os 11 anos de idade?", "Sim", "Não", "Não" ],
	[ "Faz uso de drogas ilícitas injetáveis?", "Sim", "Não", "Não" ],
	[ "Tem diabetes?", "Sim", "Não", "Não" ],
	[ "Tem ou teve câncer?", "Sim", "Não", "Não" ],
	[ "Tem AIDS?", "Sim", "Não", "Não" ],
	[ "Já teve malária?", "Sim", "Não", "Não" ],
];
// Função que monta o html 
function renderQuestion(){
	test = document.getElementById("quiz");  //Adiciona a div QUIZ à variável test
	if(pos >= questions.length){  			 //Se chegou ao final dp array então...
		if (correct < questions.length) {	 //Se errou alguma questão: monta o html apropriado
			test.innerHTML = "<p class='titulo-quiz'>Que pena!!</p>";
			test.innerHTML += "<p>Aparentemente você não pode doar sangue neste momento, mas pode clicar no botão abaixo e entrar em contato com o Hemosc para obter maiores informações:</p>";
			test.innerHTML += "<a class='btn-hemosc' href='http://www.hemosc.org.br/' target='_blank'>Hemosc</a>";
			test.innerHTML += "<input class='btn-hemosc' type='buton' onclick='renderQuestion()' value='Refazer'>";
		} else {                             //Se acertou todas: monta o html apropriado
		test.innerHTML = "<p class='titulo-quiz'>Parabéns!!!</p>";
		test.innerHTML += "<p>Você está apto a ser um doador, sua boa ação pode salvar até 3 vidas!!!</p>";
		test.innerHTML += "<p>Clique no botão abaixo para se cadastrar:</p>";
		test.innerHTML += "<input id='btn-cadastrar' type='button' name='cadastrar' value='cadastrar'>";}
		pos = 0;                             //Reseta as variáveis
		correct = 0;
		return false;
	}										 //Monta o título
	test.innerHTML = "<p class='titulo-quiz'>Questão "+(pos+1)+" de "+questions.length+"</p>";
	question = questions[pos][0];			 //Adiciona a pergunta à variável
	chA = questions[pos][1];				 //Adiciona a primeira opção à variável
	chB = questions[pos][2];				 //Adiciona a segunda opção à variável
	test.innerHTML += "<p class='pergunta-quiz'>"+question+"</p>";  //Monta a questão
	test.innerHTML += "<input id='btn-left' type='button' name='choices' value='"+chA+"' onclick='checkAnswer(this.value)'>";
	test.innerHTML += "<input id='btn-right' type='button' name='choices' value='"+chB+"' onclick='checkAnswer(this.value)'>";
}

function checkAnswer(val){  //verifica se a resposta está correta e avança o array
	if(val == questions[pos][3]){
		correct++;
	}
	pos++;
	renderQuestion();
}
// window.addEventListener("load", renderQuestion, false);
