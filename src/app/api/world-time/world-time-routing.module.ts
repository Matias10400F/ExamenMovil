import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorldTimePage } from './world-time.page';

const routes: Routes = [
  {
    path: '',
    component: WorldTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorldTimePageRoutingModule {}
