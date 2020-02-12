import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleDirectivasComponent } from './example-directivas/example-directivas.component';
import { PipesModule } from '../pipes/pipes.module';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  { path: 'directivas', component: ExampleDirectivasComponent }
];

@NgModule({
  declarations: [ExampleDirectivasComponent],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [ExampleDirectivasComponent]
})
export class DirectivasModule { }
