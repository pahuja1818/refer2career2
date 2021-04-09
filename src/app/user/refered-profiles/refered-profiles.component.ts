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

  constructor(
    private referService: ReferJobPostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.referService.getReferedJobPosts({
      email:
        (JSON.parse(window.atob(window.localStorage.getItem('id')))).email
    })
      .subscribe((data: any) => {
        this.allReferedProfiles = data.data;
      });
  }

  seeDetails(id: any) {
    this.router.navigateByUrl(`/referer/jobs/job-detail/${id}`);
  }

  openResume(resume: any) {
    window.open(resume);
  }

}
