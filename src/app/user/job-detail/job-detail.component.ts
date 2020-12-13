import { JobPostServiceService } from './../../shared/services/job-post-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss'],
})
export class JobDetailComponent implements OnInit {
  jobPost: any = {}
  post: any = {}

  constructor(
    private jobPostService: JobPostServiceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
   
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        console.log(params.id);
        this.jobPostService.getJobPost({ '_id': params.id}).subscribe((data: any) => {
          this.jobPost = data.data;
          this.post = this.jobPostService.postDetail;
          console.log(this.post);
          this.jobPost.forEach(dat => {
            console.log(dat)
          
          })
        });
      }
    });

  }

}
