var link = document.querySelector(".apresentacao-conteudo");
link.addEventListener("click",function(){
  
   var posicoes = {
       top: document.querySelector("#parte-quiz").offsetTop,
       left:0,
       behavior: 'smooth'
   };

   window.scrollTo(posicoes);


});
