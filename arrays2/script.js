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
var frutas = ["pera", "mamão", "maçã", "abacaxi"];
frutas.forEach(function (fruta, index, array) {
  frutas.push("");
  console.log(fruta);
});
