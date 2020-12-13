import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})



  
export class UserProfileComponent implements OnInit {

  

  user: any = {};

  isEditing = false;
  organizationLogo: any;
  organizationLogoData: any;
  userPhoto: any;
  userPhotoData: any;
  minDate: Date;
  maxDate: Date;

  detailForm: FormGroup;
  constructor( 
    private menu: MenuController,
    private authService: AuthService,
    private toastService: ToastService,) { 

      const currentYear = new Date().getFullYear();
      this.minDate = new Date(currentYear - 50, 0, 1);
      this.maxDate = new Date(currentYear + 1, 11, 31);
    }

  ngOnInit() {
    this.user = this.authService.currentUser;
    if (!this.user.organizationDetails) { this.user.organizationDetails = {}; }
    this.detailForm = new FormGroup({
      name: new FormControl({ value: this.user.name, disabled: true }, [Validators.required]),
      email: new FormControl({ value: this.user.email, disabled: true }, [Validators.required, Validators.email]),
      mobile: new FormControl({ value: this.user.organizationDetails.mobile, disabled: true },
         [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      alternateNumber: new FormControl({ value: this.user.alternateNumber, disabled: true }, [Validators.required]),
      // alternateNumber: new FormControl({ value: this.user.alternateNumber, disabled: true }, [Validators.required]),
      addressLineOne: new FormControl(this.user.organizationDetails.addressLineOne, [Validators.required]),
      addressLineTwo: new FormControl(this.user.organizationDetails.addressLineTwo,[Validators.required]),
      city: new FormControl(this.user.organizationDetails.city, [Validators.required]),
      pincode: new FormControl(this.user.organizationDetails.pincode,
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      DOB: new FormControl(this.user.organizationDetails.DOB,[Validators.required]),
      postgraduationfield: new FormControl(this.user.organizationDetails.postgraduationfield, [Validators.required]),
      postgraduationpassing: new FormControl(this.user.organizationDetails.postgraduationpassing,
         [Validators.required]),
      postgraduationpercent: new FormControl(this.user.organizationDetails.postgraduationpercent,
        [Validators.required]),
      postgraduationinstitution: new FormControl(this.user.organizationDetails.postgraduationinstitution, [Validators.required]),
     
     
      graduationfield: new FormControl(this.user.organizationDetails.graduationfield, [Validators.required]),
      graduationinstitution: new FormControl(this.user.organizationDetails.graduationinstitution, [Validators.required]),
      graduationpercent: new FormControl(this.user.organizationDetails.graduationpercent, [Validators.required]),
      graduationpassing: new FormControl(this.user.organizationDetails.graduationpassing, [Validators.required]),
      highschoolstream: new FormControl(this.user.organizationDetails.highschoolstream, [Validators.required]),
      highschoolinstitution: new FormControl(this.user.organizationDetails.highschoolinstitution, [Validators.required]),
      highschoolpercent: new FormControl(this.user.organizationDetails.highschoolpercent, [Validators.required]),
      highschoolboard: new FormControl(this.user.organizationDetails.highschoolboard, [Validators.required]),
      highschoolpassing: new FormControl(this.user.organizationDetails.highschoolpassing, [Validators.required]),
      highschoolcity: new FormControl(this.user.organizationDetails.highschoolcity, [Validators.required]),
      
      
    
    });
    this.detailForm.disable();
    this.userPhoto = this.user.photo;
    this.organizationLogo = this.user.organizationDetails.logo;
  }
  onEnableEditing() {
    this.isEditing = true;
    this.detailForm.enable();
    this.detailForm.controls.name.disable();
    this.detailForm.controls.email.disable();
  }


  uploadImage(event: any, id = 0) {
    const reader: FileReader = new FileReader();
    reader.onload = (file: any) => {
      if (id === 0) {
        this.organizationLogo = file.target.result;
      }
      else {
        this.userPhoto = file.target.result;
      }
    };
    reader.readAsDataURL(event.target.files[0]);
    if (id === 0) {
      this.organizationLogoData = event.target.files[0];
    }
    else {
      this.userPhotoData = event.target.files[0];
    }
  }

  save() {
    this.detailForm.markAllAsTouched();
    if (this.detailForm.valid) {
      const details: any = {
        email: this.user.email,
        mobile: this.detailForm.get('mobile').value,
        alternateNumber: this.detailForm.get('alternateNumber').value,
        photo: this.userPhoto,
        organizationDetails: {
          addressLineOne: this.detailForm.get('addressLineOne').value,
          addressLineTwo: this.detailForm.get('addressLineTwo').value,
          DOB: this.detailForm.get('date of birth').value,
          postgraduationfield: this.detailForm.get('postgraduationfield').value,
          postgraduationpercent: this.detailForm.get('postgraduationpercent').value,
          postgraduationpassing: this.detailForm.get(' postgraduationpassing').value,
          postgraduationinstitution: this.detailForm.get(' postgraduationinstitution').value,
          graduationfield: this.detailForm.get('graduationfield').value,
          graduationinstitution: this.detailForm.get('graduationinstitution').value,
          graduationpercent: this.detailForm.get(' graduationpercent').value,
          graduationpassing: this.detailForm.get('graduationpassing').value,
          highschoolstream: this.detailForm.get(' highschoolstream').value,
          highschoolinstitution: this.detailForm.get(' highschoolinstitution').value,
          highschoolpercent: this.detailForm.get('highschoolpercent').value,
          highschoolboard: this.detailForm.get('highschoolboard').value,
          highschoolpassing: this.detailForm.get('highschoolpassing').value,
          highschoolcity: this.detailForm.get(' highschoolcity').value,
          
        
          city: this.detailForm.get('city').value,
          pincode: this.detailForm.get('pincode').value,
          logo: this.organizationLogo
        }
      };
      this.authService.updateUserDetails(details).then(data => {
        if (data) {
          console.log('true');
          this.isEditing = false;
          this.detailForm.disable();
          this.toastService.showToast('Details Updated Successfully!');
        }
        else { this.toastService.showToast('Something went wrong!', 'bg-danger'); }
      });
    }
  }

  cancel() {
    this.detailForm.patchValue({
      mobile: this.user.mobile,
      alternateNumber: this.user.alternateNumber,
      addressLineOne: this.user.organizationDetails.addressLineOne,
      addressLineTwo: this.user.organizationDetails.addressLineTwo,
      DOB: this.user.organizationDetails.DOB,
      postgraduationfield: this.user.organizationDetails. postgraduationfield,
      postgraduationpercent: this.user.organizationDetails. postgraduationpercent,
      postgraduationpassing: this.user.organizationDetails. postgraduationpassing,
      postgraduationinstitution: this.user.organizationDetails.postgraduationinstitution,
      graduationfield: this.user.organizationDetails.graduationfield,
      graduationinstitution: this.user.organizationDetails.graduationinstitution,
      graduationpercent: this.user.organizationDetails.graduationpercent,
      graduationpassing: this.user.organizationDetails. graduationpassing,
      highschoolstream: this.user.organizationDetails.highschoolstream,
      highschoolinstitution: this.user.organizationDetails.highschoolinstitution,
      highschoolpercent: this.user.organizationDetails.highschoolpercent,
      highschoolboard: this.user.organizationDetails.highschoolboard,
      highschoolpassing: this.user.organizationDetails.highschoolpassing,
      highschoolcity: this.user.organizationDetails.highschoolcity,
      
     
     
      city: this.user.organizationDetails.city,
      pincode: this.user.organizationDetails.pincode,
    });
    this.isEditing = false;
    this.detailForm.disable();
  }

}




