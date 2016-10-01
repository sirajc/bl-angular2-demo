import { Component } from '@angular/core';

@Component({
  selector: 'bl-patient',
  templateUrl: './patient.component.html',
  styleUrls: [ './patient.component.scss' ]
})
export class PatientComponent {
  patients: any[] = [
    { name: 'ABX', id: 2},
    { name: 'PQR', id: 3}
  ];

}
