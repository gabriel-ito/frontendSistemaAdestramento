import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdestradorPageRoutingModule } from './adestrador-routing.module';

import { AdestradorPage } from './adestrador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdestradorPageRoutingModule
  ],
  declarations: [AdestradorPage]
})
export class AdestradorPageModule {}
