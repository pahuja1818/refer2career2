import { Router } from '@angular/router';
import { ReferJobPostService } from './../../shared/services/refer-job-post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refered-profiles',
  templateUrl: './refered-profiles.component.html',
  styleUrls: ['./refered-profiles.component.scss'],
})
export class ReferedProfilesComponent implements OnInit {

  allReferedProfiles: any[] = [];
  isServiceRunning = false;

  constructor(
    private referService: ReferJobPostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isServiceRunning = true;
    this.referService.getReferedJobPosts({
      email:
        (JSON.parse(window.atob(window.localStorage.getItem('id')))).email
    })
      .subscribe((data: any) => {
        if (data.data) {
          if (data.data.length > 0) {
            this.allReferedProfiles = data.data;
            this.allReferedProfiles.map((pr : any) => {
              pr.isStatus = false;
            });
          }
        }
        this.isServiceRunning = false;
      });
  }

  seeDetails(id: any) {
    this.router.navigateByUrl(`/referer/jobs/job-detail/${id}`);
  }

  openResume(resume: any) {
    window.open(resume);
  }

}
