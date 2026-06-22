// INTERFAZ BASE
// Define el contrato común para todas las bebidas
export interface Bebida {
  obtenerCosto(): number;
  obtenerDescripcion(): string;
}

