import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalendarioPageRoutingModule } from './calendario-routing.module';
import { CalendarioPage } from './calendario.page';
import { FullCalendarModule } from '@fullcalendar/angular'; // Importa FullCalendarModule
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioPageRoutingModule,
    FullCalendarModule, // Añade FullCalendarModule aquí
    ComponentsModule,
  ],
  declarations: [CalendarioPage],
})
export class CalendarioPageModule {}
