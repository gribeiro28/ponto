import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'ponto',
    loadChildren: () => import('./pages/ponto/ponto.module').then( m => m.PontoPageModule)
  },
  {
    path: 'colaborador',
    loadChildren: () => import('./pages/colaborador/colaborador.module').then( m => m.ColaboradorPageModule)
  },
  {
    path: 'projeto',
    loadChildren: () => import('./pages/projeto/projeto.module').then( m => m.ProjetoPageModule)
  },
  {
    path: 'atividade',
    loadChildren: () => import('./pages/atividade/atividade.module').then( m => m.AtividadePageModule)
  },
  {
    path: 'local',
    loadChildren: () => import('./pages/local/local.module').then( m => m.LocalPageModule)
  },
  {
    path: 'motivo',
    loadChildren: () => import('./pages/motivo/motivo.module').then( m => m.MotivoPageModule)
  },
  {
    path: 'solicitacao',
    loadChildren: () => import('./pages/solicitacao/solicitacao.module').then( m => m.SolicitacaoPageModule)
  },
  {
    path: 'lancamento',
    loadChildren: () => import('./pages/lancamento/lancamento.module').then( m => m.LancamentoPageModule)
  },
  {
    path: 'relatorio',
    loadChildren: () => import('./pages/relatorio/relatorio.module').then( m => m.RelatorioPageModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./pages/cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'card-colaborador',
    loadChildren: () => import('./pages/card-colaborador/card-colaborador.module').then( m => m.CardColaboradorPageModule)
  },
  {
    path: 'api-externa',
    loadChildren: () => import('./pages/api-externa/api-externa.module').then( m => m.ApiExternaPageModule)
  },
  {
    path: 'paginateste',
    loadChildren: () => import('./paginateste/paginateste.module').then( m => m.PaginatestePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
