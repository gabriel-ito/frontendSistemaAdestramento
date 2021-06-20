import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarAgendaPage } from './cadastrar-agenda.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarAgendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarAgendaPageRoutingModule {}
