import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
const routes: Routes = [
 {
   path: 'dashboard',
   component: CandidateDashboardComponent
 },
 {
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CandiateRoutingModule { }
