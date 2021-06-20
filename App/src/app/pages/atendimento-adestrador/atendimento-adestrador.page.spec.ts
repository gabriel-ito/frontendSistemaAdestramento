import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtendimentoAdestradorPage } from './atendimento-adestrador.page';

describe('AtendimentoAdestradorPage', () => {
  let component: AtendimentoAdestradorPage;
  let fixture: ComponentFixture<AtendimentoAdestradorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AtendimentoAdestradorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtendimentoAdestradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
