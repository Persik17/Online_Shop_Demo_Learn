import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

const routes: Routes = [
  { path: "", redirectTo: "property-list", pathMatch: "full" },
  {
    path: "property-card",
    component: PropertyCardComponent,
  },
  {
    path: "property-list",
    component: PropertyListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
