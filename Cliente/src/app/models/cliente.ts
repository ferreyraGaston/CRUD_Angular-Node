export class Cliente{
  _id?: number;
  nombre: string;
  direccion: string;
  localidad: string;
  email: string;
  vendedor: string;
  telefono: number;
  cuil: number;


  constructor(nombre: string, direccion: string, localidad: string, email: string, vendedor: string, telefono: number, cuil: number ){
      this.nombre = nombre;
      this.direccion = direccion;
      this.localidad = localidad;
      this.email = email;
      this.vendedor = vendedor;
      this.telefono = telefono;
      this.cuil = cuil;
    }
  }
