/* const carro = {
  marca: "Marca",
  preco: "0",
};

carro.marca = "Fiat";

carro.marca = "Chevrolet";

carro.preco = "100.000"; */

function Carro(marcaAtribuida, precoAtribuido) {
  (this.marca = marcaAtribuida), (this.preco = precoAtribuido); //
}

//o this se referirá a função carro, que por sua vez é a função contrutora do objeto honda

const honda = new Carro(); //quando colocada a palavra reservada new,a função retornará um objeto.A const então se trabsofma em um objeto. Caso contrário, tornará o undefinied
//honda.teste = "oi";
honda.andar = function () {
  console.log("Andou");
};
honda.marca = "honda";
honda.preco = 0;

const fiat = new Carro();

fiat.marca = "fiat";
fiat.preco = 5000;
