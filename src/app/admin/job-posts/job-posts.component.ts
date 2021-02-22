import { Router } from '@angular/router';
import { JobPostServiceService } from './../../shared/services/job-post-service.service';
import { AddJobPostComponent } from './../../shared/components/add-job-post/add-job-post.component';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-job-posts',
  templateUrl: './job-posts.component.html',
  styleUrls: ['./job-posts.component.scss'],
})
export class JobPostsComponent implements OnInit {

  allJobPost: any[] = [];
  isServiceRunning = false;

  constructor(
    public modalRef: BsModalRef,
    private modalService: BsModalService,
    private jobPostService: JobPostServiceService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.jobPostService.getPosts();
    this.isServiceRunning = true;
    this.jobPostService.jobPosts.subscribe((data: any) => {
      this.allJobPost = data;
      this.allJobPost.sort((a: any, b: any) => {
        const c: any = new Date(a.jobPost.createdAt);
        const d: any = new Date(b.jobPost.createdAt);
        return d - c;
      });
      this.isServiceRunning = false;
    },
      err => this.isServiceRunning = false);
  }

  addJobPost() {
    this.jobPostService.post = undefined;
    this.modalRef = this.modalService.show(AddJobPostComponent,
      { class: 'full-modal bg-light-grey', ignoreBackdropClick: true, animated: true });
  }


  seeDetails(id: any) {
    this.router.navigateByUrl(`/admin/jobs/detail/${id}`);
  }

}
