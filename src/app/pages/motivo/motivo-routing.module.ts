import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotivoPage } from './motivo.page';

const routes: Routes = [
  {
    path: '',
    component: MotivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotivoPageRoutingModule {}
