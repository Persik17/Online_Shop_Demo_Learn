import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { NavBarComponent } from './nav-bar/nav-bar.component';

import { PropertyShopItemComponent } from './property/property-shop-item/property-shop-item.component';
import { PropertyCartComponent } from './property/property-cart/property-cart.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyCartItemComponent } from './property/property-cart-item/property-cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PropertyListComponent,
    PropertyCartComponent,
    PropertyShopItemComponent,
    PropertyCartItemComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
