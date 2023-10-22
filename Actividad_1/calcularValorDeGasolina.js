'use strict'

let galones = 5;
let centilitrosGalón = 2458;
let costoCentilitros = 15;

let centilitros = galones * centilitrosGalón;
let valor_a_pagar = centilitros * costoCentilitros
let litrosDespachados = centilitros / 100; 

console.log(`pagar: $${valor_a_pagar.toFixed(2)}`);
console.log(`gasolina despachada: ${litrosDespachados.toFixed(2)} litros`);

/*Se investigo que toFixed es para
formatear el número  para que tenga solo dos dígitos después del punto decimal*/