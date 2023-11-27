'use strict'
// Precios de los 10 productos
var precios = [1500, 4500, 1000, 500];

// Función para calcular el costo total
function calcularCostoTotal(precios) {
  var costoTotal = 0;

  // Iterar sobre cada precio y sumarlo al costo total
  for (var i = 0; i < precios.length; i++) {
    costoTotal += precios[i];
  }

  return costoTotal;
}

// Llamar a la función y almacenar el resultado en una variable
var resultado = calcularCostoTotal(precios);

// Imprimir el resultado
console.log("El costo total de los 10 productos es: " + resultado);
