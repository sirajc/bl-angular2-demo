import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bl-patient-detail',
  template: `Pateint no {{ id }}`
})
export class PatientDetail {
  id: number = 2;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(
      (value) => this.id = +value['id']);
  }
}
