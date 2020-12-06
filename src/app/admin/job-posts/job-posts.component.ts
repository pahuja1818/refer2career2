import { AddJobPostComponent } from './../../shared/components/add-job-post/add-job-post.component';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-job-posts',
  templateUrl: './job-posts.component.html',
  styleUrls: ['./job-posts.component.scss'],
})
export class JobPostsComponent implements OnInit {

  constructor(
    public modalRef: BsModalRef,
    private modalService: BsModalService,
  ) { }

  ngOnInit() { }

  addJobPost() {
    this.modalRef = this.modalService.show(AddJobPostComponent, { class: "full-modal bg-light-grey", ignoreBackdropClick: true, animated: true })
  }

}
