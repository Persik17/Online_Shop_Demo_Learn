import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'property-cart',
    loadChildren: () =>
      import('./components/shop-cart/property-cart.module').then(
        (m) => m.PropertyCartModule
      ),
  },
  {
    path: 'property-list',
    loadChildren: () =>
      import('./components/shop-list/property-list.module').then(
        (m) => m.PropertyListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
