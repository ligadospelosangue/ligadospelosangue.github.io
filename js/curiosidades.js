var curiosidades = [
    ["Título 01","Conteúdo da curiosidade 01","url('./img/imagens/01.png')"],
    ["Título 02","Conteúdo da curiosidade 02","url('./img/imagens/02.png')"],
    ["Título 03","Conteúdo da curiosidade 03","url('./img/imagens/03.png')"],
    ["Título 04","Conteúdo da curiosidade 04","url('./img/imagens/04.png')"],
    ["Título 05","Conteúdo da curiosidade 05","url('./img/imagens/05.png')"],
    ["Título 06","Conteúdo da curiosidade 06","url('./img/imagens/06.png')"],
];

var pos, conteudo_p, conteudo_h1, conteudo_img;
function trocaCuriosidade(num){
    pos = (parseInt (num.substr(5,1))-1); 
    conteudo_h1 = document.getElementById("curios-h1");
    conteudo_h1.textContent = curiosidades[pos][0];
    conteudo_p = document.getElementById("curios-p");
    conteudo_p.textContent = curiosidades[pos][1];
    conteudo_img = document.getElementById("caixa-red");
    conteudo_img.style.backgroundImage = curiosidades[pos][2];
    console.log(conteudo_img);
}
