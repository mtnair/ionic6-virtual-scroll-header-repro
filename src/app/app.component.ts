import { Component, VERSION } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  virtualScroll = false;
  items = [...Array.from(Array(100).keys())];

  constructor(public platform: Platform) {}
}
