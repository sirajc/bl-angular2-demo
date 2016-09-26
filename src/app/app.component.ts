import { Component } from '@angular/core';

import '../style/app.scss';

@Component({
  selector: 'bl-app', // <bl-app></bl-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  message: string = 'Angular 2';

  constructor() {}

}
