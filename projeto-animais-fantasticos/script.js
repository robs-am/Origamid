/* const animais = document.getElementById("animais");
console.log(animais); */

/* const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection); */

//retornará um array, mesmo que haja apenas um elemento

//gridSection.lenght = 3 numero de itens dentro do array
//gridSection[2] seleciona item especifico dentro do array

/* const animais = document.querySelector(".animais");
const contato = document.querySelector("#contato");
const ultimoItem = document.querySelector(".animais-lista li:last-child");
const linkCSS = document.querySelector('[href^="https://"]'); //href^ = a partir de
const primeiroUl = document.querySelector("ul"); */

// Busca dentro do Ul apenas
/* const navItem = primeiroUl.querySelector("li");

//HTML Collection X Nodelist
//HTML Collection é atualizado automaticamente enquanto o Nodelist é estático.
//Nodelist tem mais métodos para mudança de comportamento, como o forEach

/* const titulo = document.querySelector(".titulo");
const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

titulo.classList.add("grid-section");

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens */

//Exercicios

// Retorne no console todas as imagens do site

const imagensSite = document.getElementsByTagName("img");
console.log(imagensSite);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagemAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagemAnimais);

//src^= seleciona elementos que contém exatamente o que está escrito depois do sinal de igual

// Selecione todos os links internos (onde o href começa com #)

const linkCSS = document.querySelectorAll('[href^="#"]');
console.log(linkCSS);

// Selecione o primeiro h2 dentro de .animais-descricao
const animaisDescricao = document.querySelectorAll(".animais-descricao");
console.log(animaisDescricao);

const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);

// Selecione o último p do site

const ultimop = document.querySelector();
