//EXERCICIOS

// Verifique a distância da primeira imagem
// em relação ao topo da página

// Retorne a soma da largura de todas as imagens

/* function somaValores() {
  const imagens = document.querySelectorAll("img"); //pega todas as imagens

  imagens.forEach((imagem) => {
    //pega o tamanho de cada imagem
    console.log(imagem.offsetWidth);
  });
}

window.onload = function () {
  //evento que dispara assim que o site é carregado, no caso aqui vai disparar a soma de valores criado na função somaValores declarada acima
  somaValores();
}; */

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const link = document.querySelectorAll("a");
//console.log(links);

const linksSize = link.matchMedia("(max-width: 48px)");

link.forEach((link) => {
  if (linksSize.matches >= 720) {
    console.log("Possue o mínimo recomendado");
  } else {
    menu.classList.add(".menu-mobile");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
