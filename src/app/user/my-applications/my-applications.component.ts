import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { JobPostServiceService } from 'src/app/shared/services/job-post-service.service';
import { analytics } from 'firebase';

@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.scss'],
})
export class MyApplicationsComponent implements OnInit {

  isServiceRunning = false;

  constructor(
    private jobService: JobPostServiceService,
    private router: Router
  ) { }

  allAppliedPosts: any[] = [];
  allJobPosts: any[] = [];

  ngOnInit() {
    this.isServiceRunning = true;
    this.jobService.getMyApplications();
    this.jobService.myApplications.subscribe((data: any) => {
      if (data.length > 0) {
        this.isServiceRunning = false;
        this.allAppliedPosts = [];
        this.getAllAppliedPosts(data);
      }
    });
  }

  getAllAppliedPosts(data: any) {
    this.isServiceRunning = true;
    this.allAppliedPosts.length = 0;
    data.forEach((post, index) => {
      this.jobService.getJobPost({ id: post.jobPostId }).subscribe((jobPost: any) => {
        if (jobPost.data !== null && jobPost.data !== undefined) {
          jobPost.appliedDate = post.date;
          jobPost.status = post.status;
          jobPost.jobPost = jobPost.data.jobPost;
          this.allAppliedPosts.push(jobPost);
        }
        if (index === data.length - 1) {
          this.isServiceRunning = false;
          this.allAppliedPosts.sort((a: any, b: any) => {
            var dateA = new Date(a.appliedDate).getTime();
            var dateB = new Date(b.appliedDate).getTime();
            return dateB - dateA;
          }
          );
        }
      });
    });
  }

  seeDetails(id: any) {
    console.log(id)
    this.router.navigateByUrl(`/referer/jobs/job-detail/${id}`);
  }

  getExperience(value: number) {
    return `${value} - ${value + 1}`;
  }

  getStartDate(date: any) {
    const date1: any = new Date();
    const date2: any = new Date(date);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 7;
  }

}
