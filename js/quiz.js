// Variáveis
var pos = 0, test, question, chA, chB, correct = 0;
// Array com as pesguntas, opções e respostas
var questions = [
	["Sua idade está entre 16 e 69 anos?", "Sim", "Não", "Sim"],
	["Você pesa mais que 50kg?", "Sim", "Não", "Sim"],
	["Teve Hepatite após os 11 anos de idade?", "Sim", "Não", "Não"],
	["Faz uso de drogas ilícitas injetáveis?", "Sim", "Não", "Não"],
	["Tem diabetes?", "Sim", "Não", "Não"],
	["Tem ou teve câncer?", "Sim", "Não", "Não"],
	["Tem AIDS?", "Sim", "Não", "Não"],
	["Já teve malária?", "Sim", "Não", "Não"],
];
// Função que monta o html 
function renderQuestion() {
	test = document.getElementById("quiz");  //Adiciona a div QUIZ à variável test
	if (pos >= questions.length) {  			 //Se chegou ao final dp array então...
		if (correct < questions.length) {	 //Se errou alguma questão: monta o html apropriado
			var quizz =  "<p class='titulo-quiz'>Que pena!!</p>";
			quizz += "<p class='subtitulo'>Aparentemente você não pode doar sangue</p>";
			quizz += "<div class='quiz-esquerdo'><p class='p-esquerdo'>Você ainda pode ajudar várias pessoas <br> incentivando todos a doarem sangue!</p>";
			quizz += "<p><a class='btn-hemosc' href='http://www.hemosc.org.br/' target='_blank'>Saiba Mais</a></p></div>";
			quizz += "<div class='quiz-direitovitor2'><p class='p-direito'>Respondeu algo errado? <br> Refaça o quiz!</p>";
			quizz += "<p><input class='btn-refazer' type='buton' onclick='renderQuestion()' value='Refazer'></p></div>";
			test.innerHTML = quizz;
		} else {                             //Se acertou todas: monta o html apropriado
			var quizz = "<p class='titulo-quiz'>Parabéns!!!</p>";
			quizz += "<p class='subtitulo'>Você tem o poder de salvar uma Vida!</p>";
			quizz += "<div class='quiz-esquerdoI'><p class='p-esquerdo'>Seja um herói! </p>";
			quizz += "<p><a class='btn-hemoscI' href='http://www.hemosc.org.br/agende-sua-doacao.html' target='_blank'>Cadastre-se</a></p></div>";
			quizz += "<div class='quiz-direitoI'><p class='p-direito'>Respondeu algo errado? <br> Refaça o quiz!</p>";
			quizz += "<p><input class='btn-refazerI' type='buton' onclick='renderQuestion()' value='Refazer'></p></div>";
			test.innerHTML = quizz;
		}
		pos = 0;                             //Reseta as variáveis
		correct = 0;
		return false;
	}
	//Monta o título
	test.innerHTML = "<p class='titulo-quiz'>Questão " + (pos + 1) + " de " + questions.length + "</p>";
	question = questions[pos][0];			 //Adiciona a pergunta à variável
	chA = questions[pos][1];				 //Adiciona a primeira opção à variável
	chB = questions[pos][2];				 //Adiciona a segunda opção à variável
	test.innerHTML += "<p class='pergunta-quiz'>" + question + "</p>";  //Monta a questão
	test.innerHTML += "<input id='btn-left' type='button' name='choices' value='" + chA + "' onclick='checkAnswer(this.value)'>";
	test.innerHTML += "<input id='btn-right' type='button' name='choices' value='" + chB + "' onclick='checkAnswer(this.value)'>";
}

function checkAnswer(val) {  //verifica se a resposta está correta e avança o array
	if (val == questions[pos][3]) {
		correct++;
	}
	pos++;
	renderQuestion();
}
// window.addEventListener("load", renderQuestion, false);
