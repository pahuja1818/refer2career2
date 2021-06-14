import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-details-employer',
  templateUrl: './job-details-employer.component.html',
  styleUrls: ['./job-details-employer.component.scss'],
})
export class JobDetailsEmployerComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  navItems: any[] = [
    {
      name: 'DASHBOARD',
      route: "/recruiter/dashboard"
    },
    {
      name: 'MY PROFILE',
      route: "/recruiter/profile"
    },
    {
      name: 'JOB POSTS',
      route: "/recruiter/job-posts"
    },
    {
      name: 'MANAGE APPLICANTS',
      route: "/recruiter/applicants"
    },
  ]

}
