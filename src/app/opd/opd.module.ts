import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { OpdComponent } from './opd.component';

@NgModule({
  imports: [ CommonModule, MdCardModule, MdToolbarModule, MdIconModule ],
  exports: [ OpdComponent ],
  declarations: [ OpdComponent ]
})
export class OpdModule {}
