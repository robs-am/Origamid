/* const href = window.location.href;
console.log(href);

window.alert("Isso é um alerta");
alert("Isso é um alerta"); // Funciona */

const h1Selecionado = document.querySelector("h1"); // Seleciona o primeiro

document.body; // Retorna o

const titulo = document.querySelector("h1");

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

/* titulo.addEventListener("click", callback); */
// ativa a função callback ao click no

//click -> evento; callback -> função que será disparada

//Ex.:

/* h1Selecionado.addEventListener("click", function () {
  console.log("Clicou em", h1Selecionado.innerText);
}); */

//Outra forma:

/* function callbackh1() {
  console.log("Clicou em", h1Selecionado.innerText);
}

h1Selecionado.addEventListener("click", callbackh1); */

//A segunda forma é melhor pois isola a função para chamá-la como argumento depois.

//Exercícios

// Retorne o url da página atual utilizando o objeto

const paginaAtual = window.location.href;
console.log(paginaAtual);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

document.querySelector(".ativo");

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;

// Retorne a largura da janela
const lsrguraJanela = window.innerWidth;
