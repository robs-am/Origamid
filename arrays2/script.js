/* for (var numero = 1; numero <= 150; numero++) {
  console.log(numero);
} */

// --> da onde se inicia a contagem, --> condição, --> incremento

//loop sobre array//

/* var videoGames = ["Switch", "PS4", "XBox", "3DS"];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
} */

//i = index de cada elemento do array

//forEach
/* var frutas = ["pera", "mamão", "maçã", "abacaxi"];
frutas.forEach(function (fruta, index, array) {
  console.log(fruta);

  frutas.push("oleo");
}); */

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

/* var brasilCampeao = [1959, 1962, 1970, 1994, 2002];
console.log(brasilCampeao); */

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

/* for (let i = 0; i < brasilCampeao.length; i++) {
  console.log(`O Brasil ganhou a copa de ${brasilCampeao[i]}`);
} */

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (var fruta = 0; fruta < frutas.length; fruta++) {
  if (frutas[fruta] === "Pera") {
    break;
  }
  console.log(frutas[fruta]);
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[4];

var frutasPop = frutas.pop(); //fazendo dessa forma, ele retornará o item Melancia, porém o deleterá do array frutas
