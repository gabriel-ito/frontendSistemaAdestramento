import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagInicialClientePageRoutingModule } from './pag-inicial-cliente-routing.module';

import { PagInicialClientePage } from './pag-inicial-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagInicialClientePageRoutingModule
  ],
  declarations: [PagInicialClientePage]
})
export class PagInicialClientePageModule {}
