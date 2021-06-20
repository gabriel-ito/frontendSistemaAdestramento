import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarAgendaPageRoutingModule } from './cadastrar-agenda-routing.module';

import { CadastrarAgendaPage } from './cadastrar-agenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarAgendaPageRoutingModule
  ],
  declarations: [CadastrarAgendaPage]
})
export class CadastrarAgendaPageModule {}
