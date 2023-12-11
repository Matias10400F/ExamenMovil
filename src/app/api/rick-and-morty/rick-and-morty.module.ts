import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RickAndMortyPageRoutingModule } from './rick-and-morty-routing.module';

import { RickAndMortyPage } from './rick-and-morty.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RickAndMortyPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RickAndMortyPage]
})
export class RickAndMortyPageModule {}
