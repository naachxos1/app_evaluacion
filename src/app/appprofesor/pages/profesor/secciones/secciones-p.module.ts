import { seccion } from 'src/app/appprofesor/pages/profesor/secciones/secciones-p.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { seccionesPageRoutingModule } from './secciones-p-routing.module';

import { seccionespage } from './secciones-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    seccionesPageRoutingModule
  ],
  declarations: [seccionespage]
})
export class seccionesPageModule {}
