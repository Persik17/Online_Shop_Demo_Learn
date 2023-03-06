import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { appReducers } from './store/reducers/app.reducers';

import { PropertyEffects } from './store/effects/property.effects';

@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([PropertyEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
