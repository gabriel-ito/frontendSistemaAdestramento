import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagInicialAdestradorPageRoutingModule } from './pag-inicial-adestrador-routing.module';

import { PagInicialAdestradorPage } from './pag-inicial-adestrador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagInicialAdestradorPageRoutingModule
  ],
  declarations: [PagInicialAdestradorPage]
})
export class PagInicialAdestradorPageModule {}
