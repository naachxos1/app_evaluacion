import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { mensajesPageRoutingModule } from './mensajes-routing.module';

import { mensajesPage } from './mensajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    mensajesPageRoutingModule
  ],
  declarations: [mensajesPage]
})
export class MensajesPageModule {}
