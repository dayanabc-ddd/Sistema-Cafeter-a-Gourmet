import { Bebida } from "./Bebida";

// CLASE ABSTRACTA DECORADOR

// Sirve como envoltura para agregar funcionalidades
export abstract class AgregadoBebida implements Bebida {
  protected bebida: Bebida;


  constructor(bebida: Bebida) {
    this.bebida = bebida;
  }


  obtenerCosto(): number {
    return this.bebida.obtenerCosto();
  }


  obtenerDescripcion(): string {
    return this.bebida.obtenerDescripcion();
  }
}

