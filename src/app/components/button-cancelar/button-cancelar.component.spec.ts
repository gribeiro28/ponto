import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, IonicRouteStrategy, IonButton } from '@ionic/angular';

import { ButtonCancelarComponent } from './button-cancelar.component';

describe('ButtonCancelarComponent', () => {
  let component: ButtonCancelarComponent;
  let fixture: ComponentFixture<ButtonCancelarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonCancelarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonCancelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
