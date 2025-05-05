"use strict";
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
const resultado = multiplicar(3, 4);
console.log(resultado);
function saudacao(nome) {
    console.log("Olá " + nome);
    console.log(` Olá ${nome}`);
}
const saudar = saudacao("Del");
