import { TestComponent } from './test/test.component';
import { SigninComponent } from './login/signin/signin.component';
import {LogInComponent} from './log-in/log-in.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login/:code/:user',
    component: LogInComponent
  },
  {
    path: 'home',
    component: TestComponent, data: { animation: 'isRight'}
  },
  {
    path: 'about',
    component: TestComponent, data: { animation: 'isRight'}
  },
  {
    path: 'referer',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'recruiter',
    loadChildren: () => import('./employer/employer.module').then(m => m.EmployerModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
