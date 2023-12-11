import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorldTimePageRoutingModule } from './world-time-routing.module';

import { WorldTimePage } from './world-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorldTimePageRoutingModule,
  ],
  declarations: [WorldTimePage]
})
export class WorldTimePageModule {}
