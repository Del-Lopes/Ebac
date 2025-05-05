function multiplicar(numero1: number, numero2: number): number {
  return numero1 * numero2;
}
const resultado = multiplicar(3, 4);

console.log(resultado);

const saudar = saudacao("Del");

function saudacao(nome: string): void {
  console.log("Olá " + nome);
  console.log(` Olá ${nome}`);
}
