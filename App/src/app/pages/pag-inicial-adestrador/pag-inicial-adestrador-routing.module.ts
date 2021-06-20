import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagInicialAdestradorPage } from './pag-inicial-adestrador.page';

const routes: Routes = [
  {
    path: '',
    component: PagInicialAdestradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagInicialAdestradorPageRoutingModule {}
