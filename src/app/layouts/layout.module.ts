import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleComponent } from './simple/simple.component';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';



@NgModule({
  declarations: [SimpleComponent, AppLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SimpleComponent,
  ]
})
export class LayoutModule { }
