/* function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console //Consegue acessar a variável pois esta dentro do escopo da função
console.log(carro); */ // Erro, carro is not defined, pois esta buscando a variável fora do escopo da função

/* {
  var mes = "março";
  console.log(mes);
}
console.log(mes); */ //ambos console.log não retornarão erro pois a variavell var ultrapassar o bloco, por isso é recomendado usar variáveis const e let

//Exercício

// Por qual motivo o código abaixo retorna com erros?
/* {
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(var, marca, portas); */

//pq a palavra reservada var está sendo chamada como argumento no console.

// Como corrigir o erro abaixo?

/* const dois = 2; // colocando a const dois fora do bloco

function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6); */

// O que fazer para total retornar 500?
//substituir a palavra var por let

/* let numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total); */
