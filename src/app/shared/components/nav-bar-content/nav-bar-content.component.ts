import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-content',
  templateUrl: './nav-bar-content.component.html',
  styleUrls: ['./nav-bar-content.component.scss'],
})
export class NavBarContentComponent implements OnInit {
 
  navBarComponents=[
    { name:'Dashboard',
      route:"/referer/dashboard"
    },
    { name:'My Profile',
      route:"/referer/profile"
    },
    { name:'Job Posts',
      route:"/referer/jobs"
    },
    { name:'Applied Jobs',
      route:"/referer/my-applications"
    }
  ]

  constructor() { }
  
  ngOnInit() {}

}
