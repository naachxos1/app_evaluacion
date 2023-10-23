import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { diseñocartaPage } from './diseñocarta.page';

const routes: Routes = [
  {
    path: '',
    component: diseñocartaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class diseñocartaPageRoutingModule {}
