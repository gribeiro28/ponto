import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApiExternaPage } from './api-externa.page';

describe('ApiExternaPage', () => {
  let component: ApiExternaPage;
  let fixture: ComponentFixture<ApiExternaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiExternaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiExternaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
