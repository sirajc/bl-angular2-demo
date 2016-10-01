import { Route } from '@angular/router';
import { HomeComponent } from './home';
import { DoctorsComponent } from './doctors';
import { PatientComponent } from './patients';
import { PatientDetail } from './patients/patient-detail';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'patients', component: PatientComponent },
  { path: 'patients/:id', component: PatientDetail }
];

export const routedComponents = [ HomeComponent, DoctorsComponent, PatientComponent, PatientDetail ];


