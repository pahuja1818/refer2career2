import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { IonicModule } from '@ionic/angular';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { MessagesComponent } from './messages/messages.component';
import { EmployerPageComponent } from './employer-page/employer-page.component';
import { JobPostsComponent } from './job-posts/job-posts.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminProfileComponent,
    AdminmenuComponent,
    MessagesComponent,
    EmployerPageComponent,
    JobPostsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    IonicModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }