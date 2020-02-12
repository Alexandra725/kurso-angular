import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FatherComponent } from './father/father.component';
import { ChildComponent } from './child/child.component';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmService } from '../auth/confirm.service';

const ROUTES: Routes = [
  // { path: '', redirectTo: 'databinding', pathMatch: 'full'},
  { path: '', component: FatherComponent},
  { path: ':id', component: ChildComponent, canDeactivate: [ConfirmService]}

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
