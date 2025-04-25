// Classe de abstração
function Ferramenta(nome, material) {
  this.nome = nome;
  this.material = material;
}
// Classe herença

function martelo(nome, marca) {
  Ferramenta.call(this, nome, "Aço");
  this.marca = marca;

  this.status = function () {
    console.log(
      this.nome + " de " + this.material + " está martelando um prego!"
    );
  };
}

function furadeira(nome, cor) {
  Ferramenta.call(this, nome, "plastico");
  this.cor = cor;
  this.status = function () {
    console.log(this.nome + " de " + this.material + " está furando a parede!");
  };
}

// instancias

const martelo1 = new martelo("Martelo Renato", "Bosch");
const furadeira1 = new furadeira("RotoMatic", "Vermelha");
const furadeira2 = new furadeira("FuraTudo", "Amarela");

// Saídas

console.log(martelo1);
martelo1.status();
console.log(furadeira1);
furadeira1.status();
console.log(furadeira2);
furadeira2.status();
