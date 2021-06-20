import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgendarAtendimentoUsuarioPage } from './agendar-atendimento-usuario.page';

describe('AgendarAtendimentoUsuarioPage', () => {
  let component: AgendarAtendimentoUsuarioPage;
  let fixture: ComponentFixture<AgendarAtendimentoUsuarioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendarAtendimentoUsuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgendarAtendimentoUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
