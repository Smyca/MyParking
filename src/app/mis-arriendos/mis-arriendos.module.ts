import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisArriendosPageRoutingModule } from './mis-arriendos-routing.module';

import { MisArriendosPage } from './mis-arriendos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisArriendosPageRoutingModule
  ],
  declarations: [MisArriendosPage]
})
export class MisArriendosPageModule {}
