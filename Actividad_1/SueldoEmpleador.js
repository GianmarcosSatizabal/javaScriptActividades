"use strict";
function calcularSalario(salario) {
  let descuentoPension = 0;
  let auxTransporte = 0;
  let subsidioFamiliar = 0;

  if (salario < 700000) {
    descuentoPension = salario * 0.02;
    auxTransporte = salario * 0.06;
  } else if (salario >= 700000 && salario <= 999999) {
    descuentoPension = salario * 0.04;
    subsidioFamiliar = 12000;
  } else if (salario > 1000000) {
    descuentoPension = salario * 0.06;
  }

  let salarioNeto =
    salario - descuentoPension + auxTransporte - subsidioFamiliar;
  return salarioNeto;
}

let salarioEmpleado = 800000;
let salarioNetoCalculado = calcularSalario(salarioEmpleado);

console.log(`El salario neto del empleado es: ${salarioNetoCalculado}`);
