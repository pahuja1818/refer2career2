import { AddJobPostComponent } from './../../shared/components/add-job-post/add-job-post.component';
import { JobPostServiceService } from './../../shared/services/job-post-service.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-employer-menu',
  templateUrl: './employer-menu.component.html',
  styleUrls: ['./employer-menu.component.scss'],
})
export class EmployerMenuComponent implements OnInit {

  user: any = {};
  allJobPost: any[] = [];
  navItems: any[] = [
    {
      name: 'DASHBOARD',
      route: "/recruiter/dashboard"
    },
    {
      name: 'MY PROFILE',
      route: "/recruiter/profile"
    },
    {
      name: 'JOB POSTS',
      route: "/recruiter/job-posts"
    },
    {
      name: 'MANAGE APPLICANTS',
      route: "/recruiter/applicants"
    },
  ]

  constructor(
    private jobPostService: JobPostServiceService,
    public modalRef: BsModalRef,
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    this.user = JSON.parse(window.atob(window.localStorage.getItem('id')));
    this.jobPostService.getPosts();
    this.jobPostService.jobPosts.subscribe((data: any) => {
      this.allJobPost = data;
    });
  }

  addJobPost() {
    this.jobPostService.post = undefined;
    this.modalRef = this.modalService.show(AddJobPostComponent,
      { class: 'full-modal bg-light-grey', ignoreBackdropClick: true, animated: true });
  }

  getName(name: string){
    return name.split(' ')[0];
  }
}
