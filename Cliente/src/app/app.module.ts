import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Componentes
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { FacturacionComponent } from './components/facturacion/facturacion.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { CrearClientesComponent } from './components/crear-clientes/crear-clientes.component';
import { HederComponent } from './components/heder/heder.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    ListarProductosComponent,
    FacturacionComponent,
    PresupuestoComponent,
    ListarClientesComponent,
    CrearClientesComponent,
    HederComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
