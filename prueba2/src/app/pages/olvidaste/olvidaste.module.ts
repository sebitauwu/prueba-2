import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidastePageRoutingModule } from './olvidaste-routing.module';

import { OlvidastePage } from './olvidaste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidastePageRoutingModule
  ],
  declarations: [OlvidastePage]
})
export class OlvidastePageModule {}
