function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));

//Parametro x Argumento
//Parametro é quando vc cria a função
//Argumeto são os valores que substitutem os parametros ao executá-la

function imc(peso, altura) {
  var imc = peso / (altura * altura)
  return imc
}

console.log(imc(64,1.7))

function corFavorita(cor) {
  if(cor === "azul") {
    return "Eu adoro o céu"
  } else if( cor === 'verde'){
    return "Eu gosto da natureza"
  }else{
    return "Eu não gosto de cores"
  }
}




addEventListener('click', function() {
  console.log('Clicou');
});

// A função possui dois argumentos
// Primeiro é a string 'click' que significa quando o usuário clica em algo
// Segundo é uma função anônima que é executada somente quando o primeiro argumento 'click' ocorre

