var curiosidades = [
    ["Sendo herói", "Uma única doação pode salvar até 4 vidas", "url('./img/imagens/0100.png')"],
    ["É rápido!", "O processo de doação dura em torno de 1 hora", "url('./img/imagens/1200.png')"],
    ["Salvando vidas", "No Brasil são realizadas cerca de 3,5 milhões de transfusões de sangue por ano", "url('./img/imagens/0800.png')"],
    ["Engorda? Emagrece?", "Não existe ligação entre ganhar ou perder peso com a doação de sangue", "url('./img/imagens/1500.png')"],
    ["Curta duração", "O sangue doado dura apenas 42 dias, é preciso ser reposto constantemente", "url('./img/imagens/1900.png')"],
    ["Dia de folga", "Quem doa tem direito assegurado por lei de tirar o dia de folga", "url('./img/imagens/1700.png')"],
];

var pos, conteudo_p, conteudo_h1, conteudo_img;
function trocaCuriosidade(num) {
    pos = (parseInt(num.substr(5, 1)) - 1);
    conteudo_h1 = document.getElementById("curios-h1");
    conteudo_h1.textContent = curiosidades[pos][0];
    conteudo_p = document.getElementById("curios-p");
    conteudo_p.textContent = curiosidades[pos][1];
    conteudo_img = document.getElementById("caixa-red");
    conteudo_img.style.backgroundImage = curiosidades[pos][2];
}
