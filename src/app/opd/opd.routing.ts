import { Route } from '@angular/router';
import { HomeComponent } from './home';
import { DoctorsComponent } from './doctors';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'doctors', component: DoctorsComponent }
];

