import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
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

  skillName = new FormControl(null, Validators.required);
  skillsArray: string[] = [];

  filteredQualifications: Observable<string[]>;

  skillsOptions: string[] = ['Java', 'Event Management', 'Angular 10', 'HTML', 'CSS',
    'Java Script', 'Type Script', 'Firebase', 'Management', 'Accounting'];
  filteredSkills: Observable<string[]>;


  profileForm: FormGroup;

  range = new FormGroup({
    start: new FormControl(null, Validators.required),
    end: new FormControl(null, Validators.required)
  });

  workExpToUpdate: any = undefined;
  workExpArray: any[] = [];

  title = new FormControl('', Validators.required);
  companyName = new FormControl('', Validators.required);

  workExpForm: FormGroup;

  referTemplate: any;

  ngOnInit() {
    this.initializeWorkExpForm();
    this.referJobPostForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      resume: new FormControl(null, Validators.required),
    });
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
          this.jobPost = data.data;
          this.isServiceRunning = false;
          this.skills = this.jobPost.jobPost.skills;
        },
          err => console.log(err));
      }
    });

    this.filteredSkills = this.skillName.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSkills(value))
    );
  }


  private _filterSkills(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.skillsOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  ngAfterViewInit() {
  }

  applyJobModal(template: any) {
    this.modalRef = this.modalService.show(template, { class: 'half-modal', ignoreBackdropClick: true, animated: true });
  }

  referJobModal(template: any) {
    this.referTemplate = template;
    this.modalService.show(template, { id: 0, class: 'min-overlay', ignoreBackdropClick: true, animated: true });
  }

  applyJob() {
    const obj = {
      candidateId: JSON.parse(window.atob(window.localStorage.getItem('id')))._id,
      jobPostId: this.jobPost._id,
      date: new Date()
    };
    this.jobPostService.applyJobPost(obj).subscribe((data: any) => {
      if (data.data) {
        const mail = {
          email: this.user.email,
          subject: 'Applied Successfully!',
          content: `<p>Hello ${this.user.name} </p><p>You have successfully applied for the role of ${this.jobPost.jobPost.title} at ${this.jobPost.jobPost.companyName}.</p><br><br><br>Thanks and Regards!<br><a style="color: blue;" href="https://refer2career.com">Refer2Career.com</a>`
        };
        this.dbService.sendMail(mail).subscribe((pata: any) => {
          if (pata.data) {
            this.toastService.showToast('Applied successfully!');
            this.jobPostService.getMyApplications();
            this.modalRef.hide();
          }
        });

      }
    });
  }

  openSkillModal(template: any) {
    this.closeModal(0);
    this.skillName.patchValue('');
    this.modalService.show(template, { id: 1, ignoreBackdropClick: true, animated: true });
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
            workExperience: this.workExpArray,
            skills: this.skillsArray,
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
                const mail = {
                  email: this.user.email,
                  subject: 'Refered Successfully!',
                  content: `<p>Hello ${this.user.name} </p><p>You have successfully refered ${refer.name} for the role of ${this.jobPost.jobPost.title} at ${this.jobPost.jobPost.companyName}.</p><br><br><br>Thanks and Regards!<br><a style="color: blue;" href="https://refer2career.com">Refer2Career.com</a>`
                };
                this.dbService.sendMail(mail).subscribe((pata: any) => {
                  if (pata.data) {
                    const email = {
                      email: refer.email,
                      subject: `You have been refered by ${this.user.name}!`,
                      content: `<p>Hello ${refer.name} </p><p>You have been refered by ${this.user.name} for the role of ${this.jobPost.jobPost.title} at ${this.jobPost.jobPost.companyName}.</p><br><p><a style="color: blue;" href="https://refer2career.com">Login to Refer2Career</a> and increase chance to get hired by completing your profile.</p><br><br><br>Thanks and Regards!<br><a style="color: blue;" href="https://refer2career.com">Refer2Career.com</a>`
                    };
                    this.dbService.sendMail(email).subscribe((jata: any) => {
                      if (jata.data) {

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

  initializeWorkExpForm() {
    this.workExpForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      companyName: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
      isWorking: new FormControl(false, Validators.required),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null),
      description: new FormControl(null, Validators.required),
    });
  }

  addSkill() {
    this.skillName.markAsTouched();
    if (this.skillName.value) {
      this.isServiceRunning = true;
      if (!this.skillsArray.includes(this.skillName.value)) {
        this.skillsArray.push(this.skillName.value);
      }
      this.skillName.reset();
    }
  }

  removeTag(index: any) {
    this.isServiceRunning = true;
    this.skillsArray.splice(index, 1);
  }

  openWorkExpModal(template: any) {
    this.workExpToUpdate = undefined;
    this.range.reset();
    this.title.reset();
    this.companyName.reset();
    this.workExpToUpdate = undefined;
    this.closeModal(0);
    setTimeout(() => {
      this.modalService.show(template, { id: 2, ignoreBackdropClick: true, animated: true });
    }, 500);
  }

  closeModal(id = 0) {
    if (id === 0) {
      this.modalService.hide();
    }
    else {
      this.modalService.hide(id);
      this.referJobModal(this.referTemplate);
    }
  }

  addWorkExp() {
    this.workExpForm.markAllAsTouched();
    if (this.workExpForm.valid) {
      const workExp: any = {
        title: this.workExpForm.get('title').value,
        type: this.workExpForm.get('type').value,
        companyName: this.workExpForm.get('companyName').value,
        location: this.workExpForm.get('location').value,
        isWorking: this.workExpForm.get('isWorking').value,
        startDate: this.workExpForm.get('startDate').value,
        endDate: this.workExpForm.get('endDate').value,
        description: this.workExpForm.get('description').value,
      };
      if (this.workExpToUpdate === undefined) {
        this.workExpArray.push(workExp);
      }
      else { this.workExpArray[this.workExpToUpdate] = workExp; }
      this.workExpToUpdate = undefined;
      this.closeModal(2);
    }
  }

  editWorkExp(workExp: any, template: any, i) {
    this.workExpToUpdate = i;
    this.workExpForm.patchValue({
      title: workExp.title,
      type: workExp.type,
      companyName: workExp.companyName,
      location: workExp.location,
      isWorking: workExp.isWorking,
      startDate: workExp.startDate,
      endDate: workExp.endDate,
      description: workExp.description,
    });
    this.closeModal(0);
    setTimeout(() => {
      this.modalService.show(template, { id: 2, ignoreBackdropClick: true, animated: true });
    }, 500);
  }

  deleteWorkExp(index: number) {
    this.isServiceRunning = false;
    this.workExpArray.splice(index, 1);
  }

}
