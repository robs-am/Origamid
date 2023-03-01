



var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50  
//existe subtração de numero e string, mas não soma dos mesmos
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

var x = 5
console.log(x)
console.log(x++); // x = x + 1
console.log(x)
console.log(++x);
console.log(x)

//OPERADORES ARITMÉTICOS UNÁRIOS
//O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total)

// Crie duas expressões que retornem NaN
var nan1 = 'roberta' / 2
console.log(nan1)


// Somar a string '200' com o número 50 e retornar 250

var soma = +'200' + 50
console.log(soma)
// Incremente o número 5 e retorne o seu valor incrementado
var x = 5
console.log(++x)


// Como dividir o peso por 2?
var numero = +'80'/2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'


console.log(peso)