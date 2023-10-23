import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidastePage } from './olvidaste.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidastePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidastePageRoutingModule {}
