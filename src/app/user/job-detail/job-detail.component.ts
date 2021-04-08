import { AuthService } from 'src/app/shared/services/auth.service';
import { ReferJobPostService } from './../../shared/services/refer-job-post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastService } from './../../shared/services/toast.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { JobPostServiceService } from './../../shared/services/job-post-service.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Status } from 'src/app/shared/models/enums';
import * as firebase from 'firebase';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss'],
})
export class JobDetailComponent implements OnInit, AfterViewInit {

  isServiceRunning = false;

  constructor(
    private jobPostService: JobPostServiceService,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private toastService: ToastService,
    private referService: ReferJobPostService,
    private dbService: AuthService
  ) { }

  user = JSON.parse(window.atob(window.localStorage.getItem('id')));
  jobPost: any = {};
  post: any = {};
  skills: any[] = [];
  fileData: any = undefined;
  filename: any = undefined;

  appliedDate: any = undefined;

  referJobPostForm: FormGroup;

  modalRef: BsModalRef;

  status = Status;

  jobId: any;

  public baseUrl = window.location.host.includes('localhost') ? 'http://localhost:8084' : 'https://instajobapp.herokuapp.com';

  basePath = '/refered-resumes';
  uploadTask: firebase.storage.UploadTask;

  ngOnInit() {
    this.isServiceRunning = true;
    this.jobPostService.getMyApplications();
    this.jobPost.jobPost = {};
    this.jobPost.jobPost.details = [];
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.jobId = params.id;
        this.jobPostService.myApplications.subscribe((data: any) => {
          data.forEach(post => {
            if (post.jobPostId === params.id) {
              this.appliedDate = post.date;
            }
          });
        });
        this.jobPostService.getJobPost({ id: params.id }).subscribe((data: any) => {
          console.log(data);
          this.jobPost = data.data;
          this.isServiceRunning = false;
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
      name: new FormControl(null, [Validators.required]),
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
        let mail = {
          email: this.user.email,
          subject: "Applied Successfully!",
          content: `<p>Hello ${this.user.name} </p><p>You have successfully applied for the role of ${this.jobPost.jobPost.title} at ${this.jobPost.jobPost.companyName}.</p><br><br><br>Thanks and Regards!<br><a style="color: blue;" href="https://refer2career.com">Refer2Career.com</a>`
        }
        this.dbService.sendMail(mail).subscribe((data: any) => {
          if (data.data) {
            this.toastService.showToast('Applied successfully!');
            this.jobPostService.getMyApplications();
            this.modalRef.hide();
          }
        });

      }
    });
  }

  closeModal() {
    this.modalRef.hide();
  }
  async referJobPost() {
    let resume;
    // const file: any;
    this.referJobPostForm.markAllAsTouched();
    if (this.referJobPostForm.valid) {
      const storageRef: any = firebase.storage().ref();
      const time = new Date().getTime();
      await storageRef.child(`${this.basePath}/${time}${this.filename}`).put(this.fileData);
      storageRef.child(`${this.basePath}/${time}${this.filename}`).getDownloadURL().then(async (url) => {
        resume = url;
        this.fileData = undefined;

        if (resume && this.fileData === undefined) {
          const refer: any = {
            resume,
            jobTitle: this.jobPost.jobPost.title,
            name: this.referJobPostForm.get('name').value,
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
                let mail = {
                  email: this.user.email,
                  subject: "Refered Successfully!",
                  content: `<p>Hello ${this.user.name} </p><p>You have successfully refered ${refer.name} for the role of ${this.jobPost.jobPost.title} at ${this.jobPost.jobPost.companyName}.</p><br><br><br>Thanks and Regards!<br><a style="color: blue;" href="https://refer2career.com">Refer2Career.com</a>`
                }
                this.dbService.sendMail(mail).subscribe((data: any) => {
                  if (data.data) {
                    let mail = {
                      email: refer.email,
                      subject: `You have been refered by ${this.user.name}!`,
                      content: `<p>Hello ${refer.name} </p><p>You have been refered by ${this.user.name} for the role of ${this.jobPost.jobPost.title} at ${this.jobPost.jobPost.companyName}.</p><br><p><a style="color: blue;" href="https://refer2career.com">Login to Refer2Career</a> and increase chance to get hired by completing your profile.</p><br><br><br>Thanks and Regards!<br><a style="color: blue;" href="https://refer2career.com">Refer2Career.com</a>`
                    }
                    this.dbService.sendMail(mail).subscribe((data: any) => {
                      if (data.data) {

                      }
                    });
                  }
                });
                this.modalRef.hide();
              });
            }
            else { this.toastService.showToast('This profile already refered!', 'bg-danger'); }
          });

        }
      });
    }
  }

  uploadResume(event: any) {
    console.log(event.target.files);
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    this.fileData = event.target.files[0];
    this.filename = event.target.files[0].name;
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
