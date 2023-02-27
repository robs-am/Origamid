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
