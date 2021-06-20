import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarAtendimentoUsuarioPage } from './agendar-atendimento-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarAtendimentoUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarAtendimentoUsuarioPageRoutingModule {}
