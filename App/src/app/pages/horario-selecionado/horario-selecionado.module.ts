import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioSelecionadoPageRoutingModule } from './horario-selecionado-routing.module';

import { HorarioSelecionadoPage } from './horario-selecionado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioSelecionadoPageRoutingModule
  ],
  declarations: [HorarioSelecionadoPage]
})
export class HorarioSelecionadoPageModule {}
