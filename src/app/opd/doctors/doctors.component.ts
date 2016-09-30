import { Component } from '@angular/core';

@Component({
  selector: 'bl-home',
  template: `
  <ul>
    <li *ngFor="let doctor of doctors">
      <md-card>{{doctor}}</md-card>
    </li>
  </ul>
  `,
  styles: [
    `
    li {
      font-size: bigger;
      list-style: none;
    }

    md-card {
      margin: 1em 0;
      max-width: 20em;
    }

    `
  ]
})
export class DoctorsComponent {

  doctors = [
    'Tasleem',
    'Bhanushali',
    'Tanveer',
    'Chandra',
    'Gala'
  ];

}
