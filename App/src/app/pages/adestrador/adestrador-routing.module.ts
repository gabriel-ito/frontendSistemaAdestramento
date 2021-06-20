import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdestradorPage } from './adestrador.page';

const routes: Routes = [
  {
    path: '',
    component: AdestradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdestradorPageRoutingModule {}
