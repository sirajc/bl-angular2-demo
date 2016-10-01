import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdButtonModule, MdCardModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { OpdComponent } from './opd.component';

import { routedComponents } from './opd.routing';
import { appRoutes } from './opd.routing';

@NgModule({
  imports: [ CommonModule, MdCardModule, MdToolbarModule, MdIconModule, RouterModule.forChild(appRoutes), MdButtonModule ],
  exports: [ OpdComponent ],
  declarations: [ OpdComponent, ...routedComponents  ]
})
export class OpdModule {}
