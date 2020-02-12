import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MotivoPage } from './motivo.page';

describe('MotivoPage', () => {
  let component: MotivoPage;
  let fixture: ComponentFixture<MotivoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MotivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
