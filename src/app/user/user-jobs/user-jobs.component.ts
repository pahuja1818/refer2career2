import { Router } from '@angular/router';
import { JobPostServiceService } from './../../shared/services/job-post-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-jobs',
  templateUrl: './user-jobs.component.html',
  styleUrls: ['./user-jobs.component.scss'],
})
export class UserJobsComponent implements OnInit {

  allJobPost: any[] = [];

  constructor(
    private jobPostService: JobPostServiceService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.jobPostService.getAllJobPosts().subscribe((data: any) => {
      this.allJobPost = data.data;
    })
  }

  seeDetails(_id: any, data: any) {
    this.jobPostService.postDetail = data;
    this.router.navigateByUrl(`/candidate/job/job-detail/${_id}`);
  }

}
