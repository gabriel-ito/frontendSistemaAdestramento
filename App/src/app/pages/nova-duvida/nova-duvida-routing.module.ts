import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaDuvidaPage } from './nova-duvida.page';

const routes: Routes = [
  {
    path: '',
    component: NovaDuvidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaDuvidaPageRoutingModule {}
