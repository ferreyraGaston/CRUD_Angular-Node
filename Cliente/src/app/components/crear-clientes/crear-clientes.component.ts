import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css']
})
export class CrearClientesComponent implements OnInit {
  clienteForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      localidad: ['', Validators.required],
      cuil: ['', Validators.required],
      email: ['', Validators.email],
      vendedor: ['', Validators.required],
      telefono: ['', Validators.required],
    })
    }

  ngOnInit(): void {

  }

  agregarCliente() {
    const CLIENTE: Cliente = {
      nombre: this.clienteForm.get('nombre')?.value,
      direccion: this.clienteForm.get('direccion')?.value,
      localidad: this.clienteForm.get('localidad')?.value,
      email: this.clienteForm.get('email')?.value,
      vendedor: this.clienteForm.get('vendedor')?.value,
      telefono: this.clienteForm.get('telefono')?.value,
      cuil: this.clienteForm.get('cuil')?.value,
    }

    console.log(CLIENTE);
    this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
    this.router.navigate(['/']);
  }

}
