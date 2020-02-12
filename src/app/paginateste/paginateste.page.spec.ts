import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaginatestePage } from './paginateste.page';

describe('PaginatestePage', () => {
  let component: PaginatestePage;
  let fixture: ComponentFixture<PaginatestePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatestePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginatestePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
