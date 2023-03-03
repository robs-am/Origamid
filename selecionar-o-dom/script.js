/* const animais = document.getElementById("animais");
console.log(animais); */

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection);

//retornará um array, mesmo que haja apenas um elemento

//gridSection.lenght = 3 numero de itens dentro do array
//gridSection[2] seleciona item especifico dentro do array

const animais = document.querySelector(".animais");
const contato = document.querySelector("#contato");
const ultimoItem = document.querySelector(".animais-lista li:last-child");
const linkCSS = document.querySelector('[href^="https://"]'); //href^ = a partir de
const primeiroUl = document.querySelector("ul");

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector("li");
