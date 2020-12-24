import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { JobPostServiceService } from 'src/app/shared/services/job-post-service.service';

@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.scss'],
})
export class MyApplicationsComponent implements OnInit {

  constructor(
    private jobService: JobPostServiceService,
    private router: Router
  ) { }

  allAppliedPosts: any[] = [];

  ngOnInit() {
    this.jobService.getMyApplications();
    this.jobService.myApplications.subscribe((data: any) => {
      if (data.length > 0) {
        this.allAppliedPosts = [];
        this.getAllAppliedPosts(data);
      }
    })
  }

  getAllAppliedPosts(data: any) {
    console.log(data);
    console.log(this.allAppliedPosts);
    this.allAppliedPosts.length = 0;
    data.forEach(post => {
      this.jobService.getJobPost({ id: post.jobPostId }).subscribe((jobPost: any) => {
        jobPost.appliedDate = post.date;
        this.allAppliedPosts.push(jobPost);
        console.log(this.allAppliedPosts);
      })
    })
  }

  seeDetails(id: any){
    this.router.navigateByUrl(`/candidate/jobs/job-detail/${id}`);
  }

}
