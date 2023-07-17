import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { CrearClientesComponent } from './components/crear-clientes/crear-clientes.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';

const routes: Routes = [
  { path: '', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'listar-cliente', component: ListarClientesComponent },
  { path: 'crear-cliente', component: CrearClientesComponent },
  { path: 'editar-producto/:id', component: CrearProductoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
