var nome = "Irene";

// nome.length quando não for função, não sera método, portanto será uma propriedade após o ponto.
//nome.toLowerCase(); tendo parenteses depois, será um método, portanto exeutará uma função.

var nomeMinusculo = nome.toLowerCase();

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

// --. retorna o conteúdo da função

areaQuadrado.length; // 1

// --. retorna o número de argumentos que existe dentro da função

var btn = document.querySelector(".btn");

// --> variavel, document = objeto, querySelector = método

//ELEMENTOS DO DOM

var btn = document.querySelector(".btn");

btn.classList.add("azul"); // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener("click", function () {
  console.log("Clicou");
});

//Exercício

// nomeie 3 propriedades ou métodos de strings

var estado = "Rio de Janeiro";

estado.length;
estado.toLowerCase();
estado.fontsize();

// nomeie 5 propriedades ou métodos de elementos do DOM

//classList
//addEventListener
//id
//innerHtml

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

//writeText
//readText
