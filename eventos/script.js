/* const imagem = document.querySelector("img"); */

/* imagem.addEventListener("click", () => {
  console.log("clicou");
}); */

/* function callback() {
  console.log();

} */

//imagem.addEventListener("click", callback()); //Se chamar a função com () será undefined

//É uma boa pratica separar a função do eventListener a qual ela será chamada
//a fim de ser mais facil depois para debugar o código

//const animaisLista = document.querySelector(".animais-lista");

/* function callbackLista(event) {
  console.log(event.target); //pega exatamente onde ocorreu o click
  console.log(event.currentTarget); //pega toda a selção do querySelector
}

animaisLista.addEventListener("click", callbackLista); */

/* const linkExterno = document.querySelector('a[href^="http"]');

function linkExternoHandle(event) {
  event.preventDefault();
  console.log(event);
}

linkExterno.addEventListener("click", linkExternoHandle); */

//usado para prevenir o padrão esperado, no caso como esta selecionado o href, o clique não dara abrir uma pagina externa

const linkExterno = document.querySelector('a[href^="http"]');

function linkExternoHandle(event) {
  event.preventDefault();
  console.log(this.getAttribute("href")); //this retorna o elemento que foi selecionado, no caso de eventos funcionara como o event.currentTarget
}

linkExterno.addEventListener("click", linkExternoHandle);
