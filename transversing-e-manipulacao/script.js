const h1 = document.querySelector("h1");

h1.innerHTML = "<h1>Outro título</h1>"; //mudará o título mantendo as propriedades da fonte (tamanho, escalada, tipo)

console.log(h1.innerHTML);

/* h1.outerHTML = "<h1>Outro título</h1>"; */

/* console.log(h1.outerHTML); */ //muda o título substituindo todas as propriedades
