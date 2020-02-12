import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardColaboradorPageRoutingModule } from './card-colaborador-routing.module';

import { CardColaboradorPage } from './card-colaborador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardColaboradorPageRoutingModule
  ],
  declarations: [CardColaboradorPage]
})
export class CardColaboradorPageModule {}
