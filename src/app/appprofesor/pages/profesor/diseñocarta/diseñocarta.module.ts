import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { diseñocartaPageRoutingModule } from './diseñocarta-routing.module';

import { diseñocartaPage } from './diseñocarta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    diseñocartaPageRoutingModule
  ],
  declarations: [diseñocartaPage]
})
export class diseñocartaPageModule {}
