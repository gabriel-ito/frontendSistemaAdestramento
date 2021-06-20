import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAdestradorPageRoutingModule } from './home-adestrador-routing.module';

import { HomeAdestradorPage } from './home-adestrador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAdestradorPageRoutingModule
  ],
  declarations: [HomeAdestradorPage]
})
export class HomeAdestradorPageModule {}
