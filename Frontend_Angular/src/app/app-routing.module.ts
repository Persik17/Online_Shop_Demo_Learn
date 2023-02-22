import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PropertyCartComponent } from './property/property-cart/property-cart.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'property-list', pathMatch: 'full' },
  {
    path: 'property-cart',
    component: PropertyCartComponent,
  },
  {
    path: 'property-list',
    component: PropertyListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
