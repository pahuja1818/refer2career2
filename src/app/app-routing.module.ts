import { SigninComponent } from './login/signin/signin.component';
import { ReferAndEarnComponent } from './refer-and-earn/refer-and-earn.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {
    path: 'partners',
    component: PartnersComponent
  },
  {
    path: 'refer-and-earn',
    component: ReferAndEarnComponent
  },
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
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
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
