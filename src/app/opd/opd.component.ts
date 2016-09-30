import { Component } from '@angular/core';

@Component({
  selector: 'bl-opd',
  templateUrl: './opd.component.html',
  styleUrls: [ './opd.component.scss' ]
})
export class OpdComponent {
  name: string = 'BL OPD';

  doctors = [
    'Tasleem',
    'Bhanushali',
    'Tanveer',
    'Chandra',
    'Gala'
  ];
}
