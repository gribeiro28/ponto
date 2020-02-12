import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotivoPageRoutingModule } from './motivo-routing.module';

import { MotivoPage } from './motivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotivoPageRoutingModule
  ],
  declarations: [MotivoPage]
})
export class MotivoPageModule {}
