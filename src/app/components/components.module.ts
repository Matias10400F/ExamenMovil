import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { LogoutComponent } from './logout/logout.component';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [HeaderComponent,LogoutComponent,FooterComponent],
  imports: [CommonModule, IonicModule,RouterModule],
  exports: [HeaderComponent,LogoutComponent,FooterComponent],
})
export class ComponentsModule {}
