import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { LayoutModule } from './layouts/layout.module';
import { SimpleComponent } from './layouts/simple/simple.component';
import { LoginComponent } from './auth/login/login.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';


const ROUTES: Routes = [
  { path: '', redirectTo: 'directivas', pathMatch: 'full' },
  {path: '', component: AppLayoutComponent,
    children: [
      { path: 'directivas',
      loadChildren: () => import('./directivas/directivas.module').then(m => m.DirectivasModule)
    },
    { path: 'databinding', canActivate: [AuthService],
      loadChildren: () => import('./data-binding/data-binding.module').then(m => m.DataBindingModule)
    }
    ]},
    {
      path: '', component: SimpleComponent,
      children: [
        {
          path: 'login',
          component: LoginComponent
        },
      ]
    },
  { path: '**', redirectTo: 'directivas'}
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
