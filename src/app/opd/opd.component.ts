import { Component } from '@angular/core';
import { MdIconRegistry } from '@angular/material';

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

  constructor(mdIconReg: MdIconRegistry) {
    mdIconReg.registerFontClassAlias('fa', 'fa');
    mdIconReg.setDefaultFontSetClass('fa');
  }
}
