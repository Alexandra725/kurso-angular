import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecoratePipe } from './decorate.pipe';



@NgModule({
  declarations: [DecoratePipe],
  imports: [
    CommonModule
  ],
  exports: [DecoratePipe]
})
export class PipesModule { }
