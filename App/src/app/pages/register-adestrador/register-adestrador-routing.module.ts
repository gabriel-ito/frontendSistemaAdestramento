import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterAdestradorPage } from './register-adestrador.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterAdestradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterAdestradorPageRoutingModule {}
