import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallecardPageRoutingModule } from './diseñocarta-routing.module';

import { diseñocartaPage } from './diseñocarta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallecardPageRoutingModule
  ],
  declarations: [diseñocartaPage]
})
export class diseñocartaPageModule {}
