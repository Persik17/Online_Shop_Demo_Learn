import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { PropertyService } from './services/property.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Frontend_Angular';
}
