import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaDuvidaPageRoutingModule } from './nova-duvida-routing.module';

import { NovaDuvidaPage } from './nova-duvida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaDuvidaPageRoutingModule
  ],
  declarations: [NovaDuvidaPage]
})
export class NovaDuvidaPageModule {}
