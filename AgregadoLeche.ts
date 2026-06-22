import { AgregadoBebida } from "./AgregadoBebida";

// DECORADOR CONCRETO: LECHE
// Añade costo y descripción de leche
export class AgregadoLeche extends AgregadoBebida {
  obtenerCosto(): number {
    return super.obtenerCosto() + 0.5;
  }
  obtenerDescripcion(): string {
    return super.obtenerDescripcion() + " + leche";
  }
}

