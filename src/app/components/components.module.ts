import { ButtonEnviarComponent } from './button-enviar/button-enviar.component';
import { ButtonCancelarComponent } from './button-cancelar/button-cancelar.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [ButtonCancelarComponent, ButtonEnviarComponent],
    exports: [ButtonCancelarComponent, ButtonEnviarComponent]
})

export class ComponentsModule{

}