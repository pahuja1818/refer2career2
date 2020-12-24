import { JobDetailsEmployerComponent } from './job-details-employer/job-details-employer.component';
import { EmployerMessagesComponent } from './employer-messages/employer-messages.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { EmployerProfleComponent } from './employer-profle/employer-profle.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployerMenuComponent } from './employer-menu/employer-menu.component';
import { JobPostsComponent } from './job-posts/job-posts.component';

const routes: Routes = [
  {
    path: '', component: EmployerDashboardComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard', component: EmployerMenuComponent
      },
      {
        path: 'profile', component: EmployerProfleComponent
      },
      {
        path: 'job-posts', component: JobPostsComponent
      },
      {
        path: 'job-posts/detail/:id', component: JobDetailsEmployerComponent
      },
      {
        path: 'applicants', component: ApplicantsComponent
      },
      {
        path: 'messages', component: EmployerMessagesComponent
      },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class EmployerRoutingModule { }
