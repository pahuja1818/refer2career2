import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastService } from './../../services/toast.service';
import { JobPostServiceService } from './../../services/job-post-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-add-job-post',
  templateUrl: './add-job-post.component.html',
  styleUrls: ['./add-job-post.component.scss'],
})
export class AddJobPostComponent implements OnInit {

  jobPost: any = undefined;
  lastDateToAppply: Date;

  jobPostForm: FormGroup;
  aboutUs = '';

  companyName = JSON.parse(window.atob(window.localStorage.getItem('id'))).organizationDetails.organizationName;
  companyLogo = JSON.parse(window.atob(window.localStorage.getItem('id'))).organizationDetails.logo;

  isServiceRunning = false;
  message = '';

  skillArray: any[] = [];
  jobDetailsArray: any[] = [];
  newAttribute: any = {};

  firstField = true;
  firstFieldName = 'First Item name';
  isEditItems: boolean;



  constructor(
    private jobPostService: JobPostServiceService,
    private toastService: ToastService,
    public modalRef: BsModalRef,
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    this.skillArray.push({ skillName: '' });
    this.jobDetailsArray.push({ detail: '' });
    this.jobPostForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      vacancy: new FormControl('', [Validators.required, Validators.minLength(1)]),
      salary: new FormControl('', [Validators.required, Validators.minLength(1)]),
      location: new FormControl('Banglore', [Validators.required]),
      lastDateToApply: new FormControl(null, [Validators.required]),
      jobType: new FormControl('In office', [Validators.required]),
      jobInternship: new FormControl('Job', [Validators.required]),
      salaryType: new FormControl('0', [Validators.required]),
      partTime: new FormControl(false),
    });

    if (this.jobPostService.post) {
      console.log(this.jobPostService.post);
      this.jobPost = this.jobPostService.post;
      this.jobPostForm.patchValue({
        title: this.jobPost.jobPost.title,
        vacancy: this.jobPost.jobPost.vacancy,
        salary: this.jobPost.jobPost.salary,
        location: this.jobPost.jobPost.location,
        jobType: this.jobPost.jobPost.jobType,
        jobInternship: this.jobPost.jobPost.jobInternship,
        salaryType: this.jobPost.jobPost.salaryType,
        partTime: this.jobPost.jobPost.partTime,
        lastDateToApply: new Date(this.jobPost.jobPost.lastDateToApply),
      });
      this.skillArray = this.jobPost.jobPost.skills;
      this.jobDetailsArray = this.jobPost.jobPost.details;
      this.aboutUs = this.jobPost.jobPost.aboutUs;
    }
  }

  addFieldValueToSkillArray() {
    this.skillArray.push({ skillName: '' });
  }

  deleteFieldValueToSkillArray(index) {
    if (this.skillArray.length > 1) { this.skillArray.splice(index, 1); }
  }

  addFieldValueToJobDetailsArray() {
    this.jobDetailsArray.push({ detail: '' });
  }

  deleteFieldValueJobDetailsArray(index) {
    if (this.skillArray.length > 1) {
      this.jobDetailsArray.splice(index, 1);
    }
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
  }

  save() {
    this.message = '';
    this.jobPostForm.markAllAsTouched();
    if (this.jobPostForm.valid) {
      this.isServiceRunning = true;
      const post: any = {
        jobPost: {
          active: true,
          companyName: this.companyName,
          companyLogo: this.companyLogo,
          createdBy: JSON.parse(window.atob(window.localStorage.getItem('id')))._id,
          createdAt: new Date(),
          title: this.jobPostForm.get('title').value,
          vacancy: this.jobPostForm.get('vacancy').value,
          salary: this.jobPostForm.get('salary').value,
          location: this.jobPostForm.get('location').value,
          jobType: this.jobPostForm.get('jobType').value,
          jobInternship: this.jobPostForm.get('jobInternship').value,
          salaryType: this.jobPostForm.get('salaryType').value,
          partTime: this.jobPostForm.get('partTime').value,
          lastDateToApply: this.jobPostForm.get('lastDateToApply').value,
          skills: this.skillArray,
          details: this.jobDetailsArray,
          aboutUs: this.aboutUs,
        }
      };
      if (!this.jobPost) {
        this.jobPostService.addJobPost(post).subscribe((data: any) => {
          if (data.data === true) { this.toastService.showToast('Job Post Added Successfully !'); }
          this.isServiceRunning = false;
          this.modalRef.hide();
          this.jobPostService.getPosts();
        });
      }
      else {
        console.log(post);
        post._id = this.jobPost._id;
        console.log(post);
        this.jobPostService.updateJobPost(post).subscribe((data: any) => {
          if (data.data === true) { this.toastService.showToast('Job Post Updated Successfully !'); }
          this.jobPostService.post = undefined;
          this.isServiceRunning = false;
          this.modalRef.hide();
          this.jobPostService.getPosts();
        });
      }
    }
  }

  deletePost() {
    this.jobPostService.deleteJobPost({ _id: this.jobPost._id }).subscribe((data: any) => {
      if (data.data === true) { this.toastService.showToast('Job post deleted successully!'); }
      this.jobPostService.post = undefined;
      this.isServiceRunning = false;
      this.modalRef.hide();
      setTimeout(time => {
        window.location.reload();
      }, 3000);
    });
  }

  delete(template: any) {
    this.modalRef = this.modalService.show(template, { id: 2, class: 'delete-modal', ignoreBackdropClick: true, animated: true });
  }

  close(id = 1) {
    if (id === 2) { this.modalService.hide(2); }
    this.modalRef.hide();
  }

}
