import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PropertyCartComponent } from './property-cart.component';

const routes: Routes = [{ path: '', component: PropertyCartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyCartRoutingModule {}
