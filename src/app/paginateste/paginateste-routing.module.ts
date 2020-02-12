import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginatestePage } from './paginateste.page';

const routes: Routes = [
  {
    path: '',
    component: PaginatestePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginatestePageRoutingModule {}
