import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisArriendosPage } from './mis-arriendos.page';

const routes: Routes = [
  {
    path: '',
    component: MisArriendosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisArriendosPageRoutingModule {}
