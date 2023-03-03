import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PropertyListComponent } from './property-list.component';

const routes: Routes = [{ path: '', component: PropertyListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyListRoutingModule {}
