import { JobPostServiceService } from './../../shared/services/job-post-service.service';
import { AddJobPostComponent } from './../../shared/components/add-job-post/add-job-post.component';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-job-posts',
  templateUrl: './job-posts.component.html',
  styleUrls: ['./job-posts.component.scss'],
})
export class JobPostsComponent implements OnInit {

  allJobPost: any[] = [];

  constructor(
    public modalRef: BsModalRef,
    private modalService: BsModalService,
    private jobPostService: JobPostServiceService
  ) { }

  ngOnInit() { 
    this.jobPostService.getAllJobPosts().subscribe((data: any) => {
      this.allJobPost = data.data;
      console.log(data);
    })
  }

  addJobPost() {
    this.jobPostService.post = undefined;
    this.modalRef = this.modalService.show(AddJobPostComponent, { class: "full-modal bg-light-grey", ignoreBackdropClick: true, animated: true })
  }

  editJobPost(post: any){
    this.jobPostService.post = undefined;
    this.jobPostService.post = post;
    this.modalRef = this.modalService.show(AddJobPostComponent, { class: "full-modal bg-light-grey", ignoreBackdropClick: true, animated: true })
  }

}
