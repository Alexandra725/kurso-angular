import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DirectivasModule } from './directivas/directivas.module';
import { DataBindingModule } from './data-binding/data-binding.module';


const ROUTES: Routes = [
  { path: '', redirectTo: 'directivas', pathMatch: 'full' },
  {path: 'directivas',
    loadChildren: () => import('./directivas/directivas.module').then(m => m.DirectivasModule)
  },
  { path: 'databinding',
    loadChildren: () => import('./data-binding/data-binding.module').then(m => m.DataBindingModule)
  },
  { path: '**', redirectTo: 'directivas'}
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DirectivasModule,
    DataBindingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
