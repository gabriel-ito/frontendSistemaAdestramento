import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./pages/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'duvida',
    loadChildren: () => import('./pages/duvida/duvida.module').then( m => m.DuvidaPageModule)
  },
  {
    path: 'atendimento',
    loadChildren: () => import('./pages/atendimento/atendimento.module').then( m => m.AtendimentoPageModule)
  },
  {
    path: 'nova-duvida',
    loadChildren: () => import('./pages/nova-duvida/nova-duvida.module').then( m => m.NovaDuvidaPageModule)
  },
  {
    path: 'adestrador',
    loadChildren: () => import('./pages/adestrador/adestrador.module').then( m => m.AdestradorPageModule)
  },
  {
    path: 'pergunta',
    loadChildren: () => import('./pages/pergunta/pergunta.module').then( m => m.PerguntaPageModule)
  },
  {
    path: 'pag-inicial-cliente',
    loadChildren: () => import('./pages/pag-inicial-cliente/pag-inicial-cliente.module').then( m => m.PagInicialClientePageModule)
  },
  {
    path: 'pag-inicial-adestrador',
    loadChildren: () => import('./pages/pag-inicial-adestrador/pag-inicial-adestrador.module').then( m => m.PagInicialAdestradorPageModule)
  },
  {
    path: 'pergunta-adestrador',
    loadChildren: () => import('./pages/pergunta-adestrador/pergunta-adestrador.module').then( m => m.PerguntaAdestradorPageModule)
  },
  {
    path: 'cadastrar-agenda',
    loadChildren: () => import('./pages/cadastrar-agenda/cadastrar-agenda.module').then( m => m.CadastrarAgendaPageModule)
  },
  {
    path: 'resposta',
    loadChildren: () => import('./pages/resposta/resposta.module').then( m => m.RespostaPageModule)
  },
  {
    path: 'register-adestrador',
    loadChildren: () => import('./pages/register-adestrador/register-adestrador.module').then( m => m.RegisterAdestradorPageModule)
  },
  {
    path: 'home-adestrador',
    loadChildren: () => import('./pages/home-adestrador/home-adestrador.module').then( m => m.HomeAdestradorPageModule)
  },
  {
    path: 'atendimento-adestrador',
    loadChildren: () => import('./pages/atendimento-adestrador/atendimento-adestrador.module').then( m => m.AtendimentoAdestradorPageModule)
  },
  {
    path: 'agendar-atendimento-usuario',
    loadChildren: () => import('./pages/agendar-atendimento-usuario/agendar-atendimento-usuario.module').then( m => m.AgendarAtendimentoUsuarioPageModule)
  },
  {
    path: 'horario-selecionado',
    loadChildren: () => import('./pages/horario-selecionado/horario-selecionado.module').then( m => m.HorarioSelecionadoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
