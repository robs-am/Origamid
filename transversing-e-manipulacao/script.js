/* const h1 = document.querySelector("h1");

h1.innerHTML = "<h1>Outro título</h1>"; //mudará o título mantendo as propriedades da fonte (tamanho, escalada, tipo)

console.log(h1.innerHTML); */

/* h1.outerHTML = "<h1>Outro título</h1>"; */

/* console.log(h1.outerHTML); */ //muda o título substituindo todas as propriedades

//CREATE ELEMENT
// const mapa = document.querySelector(".mapa");
// const novoh1 = document.createElement("h1"); //método do DOM que cria um novo elemento h1. Não aparecerá no dom ainda, apenas no console

// novoh1.innerText = "Texto Create Element"; //propriedade que adiciona novo texto

// novoh1.classList.add("titulo"); //método que adiciona nova classe ao elemnto criado

// console.log(novoh1);

// mapa.appendChild(novoh1); //após o mapa, o novoh1 será adicionado ao dom após seu primeiro filho (imagem)

//exercícios

// Duplique o menu e adicione ele em copy
// const menu = document.querySelector(".menu");

// const cloneMenu = menu.cloneNode(true); //clonará o menu
// console.log(menu);
const faq = document.querySelector(".faq");

// faq.appendChild(cloneMenu); //colocará o menu após o primeiro filho do faq

// Selecione o primeiro DT da dl de Faq
const faqLista = document.querySelector(".faq-lista"); //seleciona classe da dl faq

const primeiroDT = faqLista.children[0]; //seleciona primeiro filho da dl faq-lista
// console.log(primeiroDT);

// Selecione o DD referente ao primeiro DT
DDreferente = primeiroDT.nextElementSibling;
console.log(DDreferente.remove()); //remove a DD, para fins de confirmação

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;
