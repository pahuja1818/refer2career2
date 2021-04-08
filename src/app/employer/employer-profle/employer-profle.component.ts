import { AuthService } from 'src/app/shared/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-profle',
  templateUrl: './employer-profle.component.html',
  styleUrls: ['./employer-profle.component.scss'],
})
export class EmployerProfleComponent implements OnInit {

  user: any = undefined;
  detailForm: FormGroup;
  organizationLogo: any;
  userPhoto: any;
  isServiceRunning = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isServiceRunning = true;
    //this.user.personalDetails = {};
    this.initializeForm();
    this.authService.getCurrentUser();
    this.authService.currentUser.subscribe((data: any) => {
      this.user = data;
      this.isServiceRunning = false;
      this.initializeDetails();
    });
  }

  initializeDetails() {
    this.detailForm.patchValue({
      name: this.user.personalDetails.name,
      email: this.user.personalDetails.email,
      mobile: this.user.personalDetails.mobile,
      alternateNumber: this.user.personalDetails.alternateNumber,
      organizationName: this.user.organizationDetails.organizationName,
      organizationEmail: this.user.organizationDetails.organizationEmail,
      organizationMobile: this.user.organizationDetails.organizationMobile,
      field: this.user.organizationDetails.organizationField,
      addressLineOne: this.user.organizationDetails.addressLineOne,
      addressLineTwo: this.user.organizationDetails.addressLineTwo,
      pincode: this.user.organizationDetails.pincode,
      city: this.user.organizationDetails.city,
    });
    this.userPhoto = this.user.personalDetails.photo;
    this.organizationLogo = this.user.organizationDetails.logo;
  }

  initializeForm() {

    this.detailForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      mobile: new FormControl(null,
        [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      alternateNumber: new FormControl(null, [Validators.required]),
      organizationName: new FormControl(null, [Validators.required]),
      organizationEmail: new FormControl(null,
        [Validators.required, Validators.email]),
      organizationMobile: new FormControl(null,
        [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      field: new FormControl(null, [Validators.required]),
      addressLineOne: new FormControl(null, [Validators.required]),
      addressLineTwo: new FormControl(null,
        [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      pincode: new FormControl(null,
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    });
  }

}
