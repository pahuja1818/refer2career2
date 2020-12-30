import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})

export class UserProfileComponent implements OnInit {



  user: any = {};
  isEditing = false;
  skillName = '';
  skillsArray: any[] = [];

  profileForm: FormGroup;

  range = new FormGroup({
    start: new FormControl(null, Validators.required),
    end: new FormControl(null, Validators.required)
  });

  workExpToUpdate: any = undefined;
  workExpArray: any[] = [];

  title = new FormControl('', Validators.required);
  companyName = new FormControl('', Validators.required);

  educationToUpdate: any = undefined;

  educationDetailsForm: FormGroup;
  educationArray: any[] = [];




  constructor(
    private menu: MenuController,
    private modalRef: BsModalRef,
    private modalService: BsModalService,
    private authService: AuthService,
    private toastService: ToastService) {
  }

  ngOnInit() {
    this.initializeProfileForm();
    this.initializeEducationForm();
  }

  initializeProfileForm() {
    this.profileForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required]),
      alternateNumber: new FormControl('', [Validators.required]),
      dob: new FormControl(null, [Validators.required]),
    });
  }

  initializeEducationForm() {
    this.educationDetailsForm = new FormGroup({
      completionDate: new FormControl(null, Validators.required),
      degree: new FormControl(null, Validators.required),
      school: new FormControl(null, Validators.required),
      gpa: new FormControl(null, [Validators.required, Validators.max(10)]),
      field: new FormControl(null, Validators.required),
    });
  }

  addSkill() {
    if (this.skillName) {
      this.skillsArray.push(this.skillName);
      this.skillName = '';
    }
  }

  removeTag(index: any) {
    this.skillsArray.splice(index, 1);
  }


  openWorkExpModal(template: any) {
    this.workExpToUpdate = undefined;
    this.range.reset();
    this.title.reset();
    this.companyName.reset();
    this.workExpToUpdate = undefined;
    this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, animated: true });
  }

  closeModal() {
    this.modalRef.hide();
  }

  addWorkExp() {
    this.range.markAllAsTouched();
    this.title.markAsTouched();
    this.companyName.markAsTouched();
    if (this.range.valid && this.title.valid && this.companyName.valid) {
      const workExp = {
        startDate: this.range.get('start').value,
        endDate: this.range.get('end').value,
        title: this.title.value,
        companyName: this.companyName.value,
      };
      if (this.workExpToUpdate === undefined) {
        this.workExpArray.push(workExp);
      }
      else { this.workExpArray[this.workExpToUpdate] = workExp; }
      this.workExpToUpdate = undefined;
      this.modalRef.hide();
    }
  }

  editWorkExp(workExp: any, template: any, i) {
    this.workExpToUpdate = i;
    this.range.patchValue({
      start: workExp.startDate,
      end: workExp.endDate,
    });
    this.title.patchValue(workExp.title);
    this.companyName.patchValue(workExp.companyName);
    this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, animated: true });
  }

  deleteWorkExp(index: number) {
    this.workExpArray.splice(index, 1);
  }

  openEducationModal(template: any) {
    this.educationDetailsForm.reset();
    this.educationToUpdate = undefined;
    this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, animated: true });
  }

  addEducation() {
    this.educationDetailsForm.markAllAsTouched();
    if (this.educationDetailsForm.valid) {
      const education = {
        completionDate: this.educationDetailsForm.get('completionDate').value,
        degree: this.educationDetailsForm.get('degree').value,
        school: this.educationDetailsForm.get('school').value,
        gpa: this.educationDetailsForm.get('gpa').value,
        field: this.educationDetailsForm.get('field').value,
      };
      if (this.educationToUpdate === undefined) {
        this.educationArray.push(education);
      }
      else { this.educationArray[this.educationToUpdate] = education; }
      this.educationToUpdate = undefined;
      this.modalRef.hide();
    }
  }

  deleteEducation(index: number) {
    this.educationArray.splice(index, 1);
  }

  editEducation(education: any, template: any, i) {
    this.educationToUpdate = i;
    this.educationDetailsForm.patchValue({
      completionDate: education.completionDate,
      degree: education.degree,
      school: education.school,
      gpa: education.gpa,
      field: education.field,
    });
    this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, animated: true });
  }


}




