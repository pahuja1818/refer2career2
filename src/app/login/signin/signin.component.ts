import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserRole } from 'src/app/shared/models/enums';
import { AuthService } from 'src/app/shared/services/auth.service';

import { timer } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {


  otp = '';
  isOTPCorrect = true;
  timer: number;
  isVerified = false;

  isServiceRunning = false;

  role = UserRole;
  isVerifyOTP = false;
  isLogin = true;
  isRegistration = false;
  isForgotPassword = false;
  isPasswordVisible = false;
  isConfirmPasswordVisible = false;
  signupForm: FormGroup;
  loginForm: FormGroup;
  password = '';
  email = new FormControl('', [Validators.required, Validators.email]);

  message = '';

  constructor(
    public modalRef: BsModalRef,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initializeSignupForm();
    this.loginForm = new FormGroup({
      emailLogin: new FormControl(null, [Validators.required, Validators.email]),
      passwordLogin: new FormControl(null, [Validators.required]),
    });
  }

  isValidOTP() {
    return this.otp.length === 6;
  }

  onOtpChange($event) {
    this.otp = $event;
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
    this.isVerifyOTP = false;
    this.message = '';
  }

  initializeSignupForm() {
    this.signupForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(7)]),
    });
  }

  registerCandidate() {
    this.signupForm.markAllAsTouched();
    if (this.signupForm.valid) {
      this.isServiceRunning = true;
      const candidate: any = {
        user: {
          cId: new Date().getTime(),
          name: this.signupForm.get('name').value,
          email: (this.signupForm.get('email').value).toLowerCase(),
          password: this.signupForm.get('password').value,
          role: UserRole.CANDIDATE,
          verified: false,
          time: new Date(),
        },
      };
      this.authService.registerCandidate(candidate).subscribe((data: any) => {
        console.log('yes');
        if (data.error) {
          this.message = data.error;
        }
        else {
          this.hideAll();
          this.isVerifyOTP = true;
          let counter = 30;
          timer(1000, 1000)
            .pipe(
              takeWhile(() => counter > 0),
              tap(() => counter--)
            )
            .subscribe(() => {
              this.timer = counter;
            });
        }
        this.isServiceRunning = false;
      });
    }
  }

  verifyOTP() {
    this.isServiceRunning = true;
    const data = {
      email: this.signupForm.get('email').value,
      otp: this.otp
    };
    this.authService.verifyOTP(data).then((res: any) => {
      if (res.data === true) {
        this.isVerified = true;
        this.hideAll();
        this.isLogin = true;
      }
      else { this.isOTPCorrect = true; }
      this.isServiceRunning = false;
    });
  }

  back() {
    this.hideAll();
    this.isRegistration = true;
  }

  login() {
    if (this.loginForm.valid) {
      this.isServiceRunning = true;
      this.authService.login({
        email: (this.loginForm.get('emailLogin')
          .value).toLowerCase(), password: this.loginForm.get('passwordLogin').value
      })
        .then((data: any) => {
          console.log(data);
          if (data.error) {
            this.message = "Invalid email or password!";
          }
          else if (data.email) {
            this.modalRef.hide();
            window.location.reload();
            window.localStorage.setItem('id', window.btoa(JSON.stringify(data)));
          }
          this.isServiceRunning = false;
        });
    }
  }




}
