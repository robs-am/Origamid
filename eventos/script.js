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

const animaisLista = document.querySelector(".animais-lista");

function callbackLista(event) {
  console.log(event.target); //pega exatamente onde ocorreu o click
  console.log(event.currentTarget); //pega toda a selção do querySelector
}

animaisLista.addEventListener("click", callbackLista);
