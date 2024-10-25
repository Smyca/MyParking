import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisEstacionamientosPageRoutingModule } from './mis-estacionamientos-routing.module';

import { MisEstacionamientosPage } from './mis-estacionamientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisEstacionamientosPageRoutingModule
  ],
  declarations: [MisEstacionamientosPage]
})
export class MisEstacionamientosPageModule {}
