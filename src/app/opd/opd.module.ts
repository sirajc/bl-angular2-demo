import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdButtonModule, MdCardModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { OpdComponent } from './opd.component';
import { HomeComponent } from './home';
import { DoctorsComponent } from './doctors';

import { appRoutes } from './opd.routing';

@NgModule({
  imports: [ CommonModule, MdCardModule, MdToolbarModule, MdIconModule, RouterModule.forChild(appRoutes), MdButtonModule ],
  exports: [ OpdComponent ],
  declarations: [ OpdComponent, HomeComponent, DoctorsComponent  ]
})
export class OpdModule {}
