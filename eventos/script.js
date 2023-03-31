/* const imagem = document.querySelector("img"); */

/* imagem.addEventListener("click", () => {
  console.log("clicou");
}); */

/* function callback() {
  console.log();

} 

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

linkExterno.addEventListener("click", linkExternoHandle); 

//usado para prevenir o padrão esperado, no caso como esta selecionado o href, o clique não dara abrir uma pagina externa

/* const linkExterno = document.querySelector('a[href^="http"]');

function linkExternoHandle(event) {
  event.preventDefault();
  console.log(this.getAttribute("href")); //this retorna o elemento que foi selecionado, no caso de eventos funcionara como o event.currentTarget
}

linkExterno.addEventListener("click", linkExternoHandle); 




/* const imgs = document.querySelectorAll("img"); //pega todos os seletores de imagem

function imgSrc(event) {
  const src = event.currentTarget.getAttribute("src"); //função que tem como evento retornar o atributo de um elemento especifico, no ex ele retornará o que sta dentro do caminho src, o caminho da imagem
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener("click", imgSrc); //percore todos os seletores, adicionando um evento de click. O segundo argumento, é a função  ImgSrc, que dispara o evento explicado acima. Sendo assim, ao clicar em cada img, será retornado o valor contido nela
});
 */
/*

//for each em eventos

const imgs = document.querySelectorAll("img");

function imgSrc(event) {
  const src = event.currentTarget.getAttribute("src");
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener("click", imgSrc);
});
*/

//EXERCICIOS//

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses

//const linksInternos = document.querySelectorAll('a[href^="#"]'); //seleciona links internos

/* function handleLink(event) {
  event.preventDefault(); //previne o comportamento usual do link
  linksInternos.forEach((link) => {
    link.remove.classList("ativo");
    //loop que remove a classe de todos os links
  });

  event.currentTarget.classList.add("ativo"); //adiciona a classe somente ao link clicado
}

linksInternos.forEach((link) => {
  //adiciona o evento clique para cada link interno do site
  link.addEventListener("click", handleLink);
});
 */
// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

/* const selecionaBody = document.querySelectorAll("body *");
console.log(selecionaBody);

function handleBody(event) {
  event.preventDefault();
  this.getAttribute();
}

selecionaBody.addEventListener("click", handleBody); */

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

/* function handleKeyboard(event) {
  if (event.key === "a") document.body.classList.toggle("azul");
  else if (event.key === "v") document.body.classList.toggle("vermelho");
}

window.addEventListener("keydown", handleKeyboard); */

//adiciona fullscreen
/* function handleKeyboard(event) {
  if (event.key === "f") {
    document.body.classList.toggle("fullscreen");
  }
}

window.addEventListener("keydown", handleKeyboard); */

/* const imgs = document.querySelectorAll("img");

function handleImage(event) {
  console.log(event.currentTarget.getAttribute("src"));
}

imgs.forEach((img) => {
  img.addEventListener("click", handleImage);
}); */

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleClick(event) {
  event.preventDefault();

  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

linksInternos.forEach((link) => {
  link.addEventListener("click", handleClick);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const elementosPagina = document.querySelectorAll("body *");

function handleBody(event) {
  event.preventDefault();
  this.getAttribute();
}

elementosPagina.addEventListener("click", handleBody);

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
