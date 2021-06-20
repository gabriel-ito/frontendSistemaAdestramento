import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarAtendimentoUsuarioPageRoutingModule } from './agendar-atendimento-usuario-routing.module';

import { AgendarAtendimentoUsuarioPage } from './agendar-atendimento-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarAtendimentoUsuarioPageRoutingModule
  ],
  declarations: [AgendarAtendimentoUsuarioPage]
})
export class AgendarAtendimentoUsuarioPageModule {}
