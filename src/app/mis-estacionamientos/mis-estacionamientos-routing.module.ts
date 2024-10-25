import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisEstacionamientosPage } from './mis-estacionamientos.page';

const routes: Routes = [
  {
    path: '',
    component: MisEstacionamientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisEstacionamientosPageRoutingModule {}
