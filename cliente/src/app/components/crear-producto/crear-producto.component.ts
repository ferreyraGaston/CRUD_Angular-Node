import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  productoForm: FormGroup;

constructor(private fb:FormBuilder,
                    private router: Router){
    this.productoForm= this.fb.group({
      nombre:['',Validators.required],
      categoria:['',Validators.required],
      ubicacion:['',Validators.required],
      precio:['',Validators.required]
})
}
agergarProducto(){
 // console.log(this.productoForm)
  const PRODUCTO:Producto ={
    nombre: this.productoForm.get('nombre')?.value,
    categoria: this.productoForm.get('categoria')?.value,
    ubicacion: this.productoForm.get('ubicacion')?.value,
    precio: this.productoForm.get('precio')?.value,
  }
  console.log(PRODUCTO)
  this.router.navigate(['/'])
}

}