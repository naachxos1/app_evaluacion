import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { seccionespage } from './secciones-p.page';

const routes: Routes = [
  {
    path: '',
    component: seccionespage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class seccionesPageRoutingModule {}
