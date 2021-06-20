import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagInicialClientePage } from './pag-inicial-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: PagInicialClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagInicialClientePageRoutingModule {}
