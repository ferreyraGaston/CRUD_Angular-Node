export class Presupuesto{
  _id?: number;
  idCliente: number;
  nombre: string;
  categoria: string;
  ubicacion: string;
  precio: number;

  constructor(idCliente: number, nombre: string, categoria: string, ubicacion: string, precio: number ){
      this.idCliente = idCliente;
      this.nombre = nombre;
      this.categoria = categoria;
      this.ubicacion = ubicacion;
      this.precio = precio;
  }
}
