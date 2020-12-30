import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastService } from './../../shared/services/toast.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { JobPostServiceService } from './../../shared/services/job-post-service.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss'],
})
export class JobDetailComponent implements OnInit, AfterViewInit {

  constructor(
    private jobPostService: JobPostServiceService,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private toastService: ToastService
  ) { }
  jobPost: any = {};
  post: any = {};
  skills: any[] = [];

  appliedDate: any = undefined;

  referJobPostForm: FormGroup;

  modalRef: BsModalRef;

  ngOnInit() {
    this.jobPostService.getMyApplications();
    this.jobPost.jobPost = {};
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.jobPostService.myApplications.subscribe((data: any) => {
          data.forEach(post => {
            if (post.jobPostId === params.id) {
              this.appliedDate = post.date;
              console.log(post);
            }
          });
        });
        console.log(params.id);
        this.jobPostService.getJobPost({ id: params.id }).subscribe((data: any) => {
          this.jobPost = data.data;
          this.skills = this.jobPost.jobPost.skills;
        });
      }
    });
  }

  ngAfterViewInit() {
    console.log(this.jobPost);
  }
  applyJobModal(template: any) {
    this.modalRef = this.modalService.show(template, { class: 'half-modal', ignoreBackdropClick: true, animated: true });
  }

  referJobModal(template: any) {
    this.referJobPostForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      mobile: new FormControl(null, Validators.required),
      resume: new FormControl(null, Validators.required),
    });
    this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, animated: true });
  }

  applyJob() {
    const obj = {
      candidateId: JSON.parse(window.atob(window.localStorage.getItem('id')))._id,
      jobPostId: this.jobPost._id,
      date: new Date()
    };
    this.jobPostService.applyJobPost(obj).subscribe((data: any) => {
      if (data.data) {
        this.toastService.showToast('Applied successfully!');
        this.jobPostService.getMyApplications();
        this.modalRef.hide();
      }
    });
  }

  closeModal() {
    this.modalRef.hide();
  }

  referJobPost() {
    console.log(this.referJobPostForm.value);
  }

}
