import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtendimentoAdestradorPage } from './atendimento-adestrador.page';

const routes: Routes = [
  {
    path: '',
    component: AtendimentoAdestradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtendimentoAdestradorPageRoutingModule {}
