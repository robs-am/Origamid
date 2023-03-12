const menu = document.querySelector(".menu");
/* 
console.log(menu.classList); //mostra as classes

menu.classList.add("ativo", "teste"); //adicona mais elementos
menu.classList.remove("teste"); //adicona mais elementos
menu.classList.toggle("teste"); //adiciona ou remove classes
 */
//Exercicios

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu a");

/* itensMenu.forEach((item) => {
  item.classList.add("ativo");
}); */

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

/* itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});

itensMenu[0].classList.add("ativo"); */ //por itensMenu ser uma array, podemos acessar o primeiro item atrasves do index

// Verifique se as imagens possuem o atributo alt

/* const imagens = document.querySelectorAll("img");

imagens.forEach((item) => {
  const altAtributo = item.hasAttribute("alt");
  console.log(item, altAtributo); //apenas com altAtributo verificará se é true or false,
  //passando o item, ele verificará dentro de cada item também
});
 */
// Modifique o href do link externo no menu
const linkExterno = document.querySelectorAll("a");
console.log(linkExterno);

linkExterno[3].setAttribute("href", "#");
