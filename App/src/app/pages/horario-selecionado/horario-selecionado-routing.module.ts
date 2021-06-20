import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorarioSelecionadoPage } from './horario-selecionado.page';

const routes: Routes = [
  {
    path: '',
    component: HorarioSelecionadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioSelecionadoPageRoutingModule {}
