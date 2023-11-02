"use strict";

function sumarPrimeros150Numeros() {
  let suma = 0;
  for (let i = 1; i <= 150; i++) {
    suma += i;
  }
  return suma;
}

let resultado = sumarPrimeros150Numeros();
console.log("La suma de los primeros 150 números es: " + resultado);
