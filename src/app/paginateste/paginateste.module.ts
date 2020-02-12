import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginatestePageRoutingModule } from './paginateste-routing.module';

import { PaginatestePage } from './paginateste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginatestePageRoutingModule
  ],
  declarations: [PaginatestePage]
})
export class PaginatestePageModule {}
