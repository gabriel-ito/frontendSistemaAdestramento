import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerguntaAdestradorPageRoutingModule } from './pergunta-adestrador-routing.module';

import { PerguntaAdestradorPage } from './pergunta-adestrador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerguntaAdestradorPageRoutingModule
  ],
  declarations: [PerguntaAdestradorPage]
})
export class PerguntaAdestradorPageModule {}
