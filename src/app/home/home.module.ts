import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MenuComponent } from '../components/menu/menu.component';
import { ModuloMenuModule } from '../modulo-menu/modulo-menu.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ModuloMenuModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
