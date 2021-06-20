import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterAdestradorPageRoutingModule } from './register-adestrador-routing.module';

import { RegisterAdestradorPage } from './register-adestrador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterAdestradorPageRoutingModule
  ],
  declarations: [RegisterAdestradorPage]
})
export class RegisterAdestradorPageModule {}
