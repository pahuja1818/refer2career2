import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-content',
  templateUrl: './nav-bar-content.component.html',
  styleUrls: ['./nav-bar-content.component.scss'],
})
export class NavBarContentComponent implements OnInit {
 
  navBarComponents=[
    { name:'DASHBOARD',
      route:"/referer/dashboard"
    },
    { name:'MY PROFILE',
      route:"/referer/profile"
    },
    { name:'JOB POSTS',
      route:"/referer/jobs"
    },
    { name:'APPLIED JOB',
      route:"/referer/my-applications"
    }
  ]

  constructor() { }
  
  ngOnInit() {}

}
