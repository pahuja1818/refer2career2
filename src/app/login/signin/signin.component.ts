import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  isLogin = true;
  isRegistration = false;
  isForgotPassword = false;
  isPasswordVisible = false;
  isConfirmPasswordVisible = false;
  signupForm: FormGroup;
  loginForm: FormGroup;
  password = '';
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    public modalRef: BsModalRef,
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(7)]),
    });
  }

  forgotPasswordVisible() {
    this.hideAll();
    this.isForgotPassword = true;
  }

  registrationVisible() {
    this.hideAll();
    this.initializeSignupForm();
    this.isRegistration = true;
  }

  loginVisible() {
    this.hideAll();
    this.isLogin = true;
  }

  hideAll() {
    this.isLogin = false;
    this.isRegistration = false;
    this.isForgotPassword = false;
  }

  initializeSignupForm() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(7)]),
      'confirmPassword': new FormControl(null, [Validators.required, this.isConfirmPasswordMatches.bind(this)]),
    });
  }

  isConfirmPasswordMatches(control: FormControl) {
    if(control.value !== this.password)
    return {'not':true};
    return null
  }




}
