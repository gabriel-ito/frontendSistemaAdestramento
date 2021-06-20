import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtendimentoAdestradorPageRoutingModule } from './atendimento-adestrador-routing.module';

import { AtendimentoAdestradorPage } from './atendimento-adestrador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtendimentoAdestradorPageRoutingModule
  ],
  declarations: [AtendimentoAdestradorPage]
})
export class AtendimentoAdestradorPageModule {}
