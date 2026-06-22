import { AgregadoBebida } from "./AgregadoBebida";

// DECORADOR CONCRETO: SIROPE
// Añade costo y descripción de sirope
export class AgregadoSirope extends AgregadoBebida {
  obtenerCosto(): number {
    return super.obtenerCosto() + 0.7;
  }
  obtenerDescripcion(): string {
    return super.obtenerDescripcion() + " + sirope";
  }
}

