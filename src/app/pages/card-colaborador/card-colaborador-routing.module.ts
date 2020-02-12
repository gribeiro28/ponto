import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardColaboradorPage } from './card-colaborador.page';

const routes: Routes = [
  {
    path: '',
    component: CardColaboradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardColaboradorPageRoutingModule {}
