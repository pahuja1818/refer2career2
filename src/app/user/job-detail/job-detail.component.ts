import { ReferJobPostService } from './../../shared/services/refer-job-post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastService } from './../../shared/services/toast.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { JobPostServiceService } from './../../shared/services/job-post-service.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Status } from 'src/app/shared/models/enums';

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
    private toastService: ToastService,
    private referService: ReferJobPostService,
  ) { }
  jobPost: any = {};
  post: any = {};
  skills: any[] = [];
  fileData: any = undefined;

  appliedDate: any = undefined;

  referJobPostForm: FormGroup;

  modalRef: BsModalRef;

  status = Status;

  jobId: any;

  public baseUrl = window.location.host.includes('localhost') ? 'http://localhost:8084' : 'https://instajobapp.herokuapp.com';

  ngOnInit() {
    this.jobPostService.getMyApplications();
    this.jobPost.jobPost = {};
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.jobId = params.id;
        this.jobPostService.myApplications.subscribe((data: any) => {
          data.forEach(post => {
            if (post.jobPostId === params.id) {
              this.appliedDate = post.date;
              console.log(post);
            }
          });
        });
        this.jobPostService.getJobPost({ id: params.id }).subscribe((data: any) => {
          console.log(data);
          this.jobPost = data.data;
          this.skills = this.jobPost.jobPost.skills;
        },
          err => console.log(err));
      }
    });
  }

  ngAfterViewInit() {
    console.log();
  }
  applyJobModal(template: any) {
    this.modalRef = this.modalService.show(template, { class: 'half-modal', ignoreBackdropClick: true, animated: true });
  }

  referJobModal(template: any) {
    this.referJobPostForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      resume: new FormControl(null, Validators.required),
    });
    this.modalRef = this.modalService.show(template, { class: 'min-overlay', ignoreBackdropClick: true, animated: true });
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
  async referJobPost() {
    console.log(this.referJobPostForm.value);
    let file: any;
    this.referJobPostForm.markAllAsTouched();
    if (this.referJobPostForm.valid) {
      const name = this.referJobPostForm.get('email').value;
      const files = new FormData();
      files.append(`${name}`, this.fileData);
      files.append('random', Date.now().toString());
      files.append('name', `${name}`);
      await this.referService.uploadResume(files).then(data => {
        this.fileData = undefined;
        file = this.baseUrl + data;
      });
    }
    if (file && this.fileData === undefined) {
      const refer: any = {
        resume: file,
        jobTitle: this.jobPost.jobPost.title,
        email: this.referJobPostForm.get('email').value,
        jobId: this.jobId,
        referedBy: (JSON.parse(window.atob(window.localStorage.getItem('id')))).email,
        createdAt: new Date(),
        status: 0,
        statusUpdatedAt: new Date(),
      };
      this.referService.checkReferedProfile({
        jobId: this.jobPost.jobPostId,
        email: this.referJobPostForm.get('email').value
      }).subscribe((data: any) => {
        if (data.data === null) {
          this.referService.referJobPost(refer).subscribe((ele: any) => {
            this.toastService.showToast('Refered successfully');
            this.modalRef.hide();
          });
        }
        else { this.toastService.showToast('This profile already refered!', 'bg-danger'); }
      });
    }
  }

  uploadResume(event: any) {
    console.log(event.target.files);
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    this.fileData = event.target.files[0];
  }

}
