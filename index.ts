import { CafeSolo } from "./CafeSolo";
import { AgregadoLeche } from "./AgregadoLeche";
import { AgregadoSirope } from "./AgregadoSirope";
import { Bebida } from "./Bebida";


// CÓDIGO CLIENTE (MAIN)
// Ensambla los objetos y muestra el resultado


const cafeBase: Bebida = new CafeSolo();
const cafeConLeche: Bebida = new AgregadoLeche(cafeBase);
const cafeFinal: Bebida = new AgregadoSirope(cafeConLeche);


console.log("Costo final: $" + cafeFinal.obtenerCosto());
console.log("Descripción: " + cafeFinal.obtenerDescripcion());

