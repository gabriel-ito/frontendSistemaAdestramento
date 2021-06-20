import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerguntaAdestradorPage } from './pergunta-adestrador.page';

const routes: Routes = [
  {
    path: '',
    component: PerguntaAdestradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerguntaAdestradorPageRoutingModule {}
