import { JobDetailsAdminComponent } from './job-details-admin/job-details-admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { MessagesComponent } from './messages/messages.component';
import { JobPostsComponent } from './job-posts/job-posts.component';
import { EmployerPageComponent } from './employer-page/employer-page.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard', component: AdminmenuComponent
      },
      {
        path: 'profile', component: AdminProfileComponent
      },
      {
        path: 'organizations', component: EmployerPageComponent
      },
      {
        path: 'jobs', component: JobPostsComponent
      },
      {
        path: 'jobs/detail/:id', component: JobDetailsAdminComponent
      },
      {
        path: 'messages', component: MessagesComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
