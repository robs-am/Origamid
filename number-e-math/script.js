console.log(Number.isNaN(NaN)); //true
console.log(Number.isInteger(10)); //true

console.log(parseFloat("3234.343")); //transformara em numero
console.log(parseFloat(3234, 343)); //corta oque vem depois da virgula
console.log(parseFloat("aaa3234, 343")); //retorna nan
console.log(parseInt("100,25 reais")); //se for charcater apos o numero ele consegue transforma em numero

console.log(parseInt("102.22 reais", 10)); //retorna 102

Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

// Retorne um número aleatório
// entre 1050 e 2000

const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;

console.log(aleatorio);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";

const arrayNumeros = numeros.split(", ");
const numeroMaximo = Math.max(...arrayNumeros);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
  preco = preco.toFixed(2);
  return preco;
}

let soma = 0
listaPrecos.forEach((preco) => {
    soma +=
})

limparPreco(listaPrecos[1]);
