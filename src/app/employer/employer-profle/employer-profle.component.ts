import { AuthService } from 'src/app/shared/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-profle',
  templateUrl: './employer-profle.component.html',
  styleUrls: ['./employer-profle.component.scss'],
})
export class EmployerProfleComponent implements OnInit {

  user: any = {};
  detailForm: FormGroup;
  organizationLogo: any;
  userPhoto: any;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user.personalDetails = {};
    this.initializeForm();
    this.authService.getCurrentUser();
    this.authService.currentUser.subscribe((data: any) => {
      this.user = data;
      console.log(this.user);
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
    console.log(this.user);
    if (!this.user.organizationDetails) { this.user.organizationDetails = {}; }
    this.detailForm = new FormGroup({
      name: new FormControl({ value: this.user.name, disabled: true }, [Validators.required]),
      email: new FormControl({ value: this.user.email, disabled: true }, [Validators.required, Validators.email]),
      mobile: new FormControl({ value: this.user.mobile, disabled: true },
        [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      alternateNumber: new FormControl({ value: this.user.alternateNumber, disabled: true }, [Validators.required]),
      organizationName: new FormControl(this.user.organizationDetails.organizationName, [Validators.required]),
      organizationEmail: new FormControl(this.user.organizationDetails.organizationEmail,
        [Validators.required, Validators.email]),
      organizationMobile: new FormControl(this.user.organizationDetails.organizationMobile,
        [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      field: new FormControl(this.user.organizationDetails.organizationField, [Validators.required]),
      addressLineOne: new FormControl(this.user.organizationDetails.addressLineOne, [Validators.required]),
      addressLineTwo: new FormControl(this.user.organizationDetails.addressLineTwo,
        [Validators.required]),
      city: new FormControl(this.user.organizationDetails.city, [Validators.required]),
      pincode: new FormControl(this.user.organizationDetails.pincode,
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    });
    this.detailForm.disable();
  }

}
