import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagInicialAdestradorPage } from './pag-inicial-adestrador.page';

describe('PagInicialAdestradorPage', () => {
  let component: PagInicialAdestradorPage;
  let fixture: ComponentFixture<PagInicialAdestradorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PagInicialAdestradorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagInicialAdestradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
