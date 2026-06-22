import { Bebida } from "./Bebida";

// CLASE CONCRETA BASE
// Representa el café simple sin agregados
export class CafeSolo implements Bebida {
  obtenerCosto(): number {
    return 2.0; // costo base
  }
  obtenerDescripcion(): string {
    return "Café solo";
  }
}
