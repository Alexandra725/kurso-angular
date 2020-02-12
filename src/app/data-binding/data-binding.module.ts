import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FatherComponent } from './father/father.component';
import { ChildComponent } from './child/child.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  { path: '', redirectTo: 'databinding', pathMatch: 'full'},
  { path: 'databinding', component: FatherComponent}
];

@NgModule({
  declarations: [FatherComponent, ChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    FatherComponent

  ]
})
export class DataBindingModule { }
