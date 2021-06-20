import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { NavparamService } from './navparam.service';
import { PagInicialAdestradorPage } from './pages/pag-inicial-adestrador/pag-inicial-adestrador.page';
import { PagInicialClientePage } from './pages/pag-inicial-cliente/pag-inicial-cliente.page';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ NavparamService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, PagInicialAdestradorPage, PagInicialClientePage],
  bootstrap: [AppComponent],
})
export class AppModule {}
