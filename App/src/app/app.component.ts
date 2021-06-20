import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Minhas dúvidas', url: '/home/Outbox', icon: 'clipboard' },
    { title: 'Agendar atendimento', url: '/home/Inbox', icon: 'calendar' },
  ];
  constructor() {}
}
