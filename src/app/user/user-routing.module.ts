import { MyApplicationsComponent } from './my-applications/my-applications.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserMessagesComponent } from './user-messages/user-messages.component';
import { UserJobsComponent } from './user-jobs/user-jobs.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { ReferedProfilesComponent } from './refered-profiles/refered-profiles.component';


const routes: Routes = [
  {
    path: '', component: UserDashboardComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard', component: UsermenuComponent
      },
      {
        path: 'profile', component: UserProfileComponent, data: { animation: 'isRight'}
      },
      {
        path: 'organizations', component: UserPageComponent
      },
      {
        path: 'jobs', component: UserJobsComponent
      },

      {
        path: 'jobs/job-detail/:id', component: JobDetailComponent
      },
      {
        path: 'my-applications', component: MyApplicationsComponent
      },
      {
        path: 'referred', component: ReferedProfilesComponent
      },
      {
        path: 'messages', component: UserMessagesComponent
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
export class UserRoutingModule { }
