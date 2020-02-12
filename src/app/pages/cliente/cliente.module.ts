import { ComponentsModule } from './../../components/components.module';
import { ButtonCancelarComponent } from './../../components/button-cancelar/button-cancelar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientePageRoutingModule } from './cliente-routing.module';
import { ClientePage } from './cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ClientePageRoutingModule
  ],
  declarations: [ClientePage]
})
export class ClientePageModule {}
