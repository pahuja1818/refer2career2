import { ToastService } from 'src/app/shared/services/toast.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserRole } from 'src/app/shared/models/enums';
import { AuthService } from 'src/app/shared/services/auth.service';

import { timer } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { DbOperation } from 'src/app/shared/models/dbOperation';


@Component({
  selector: 'app-employer-signin',
  templateUrl: './employer-signin.component.html',
  styleUrls: ['./employer-signin.component.scss'],
})
export class EmployerSigninComponent implements OnInit {
  constructor(
    public modalRef: BsModalRef,
    private authService: AuthService,
    private router: Router,
    private toast: ToastService,
    private modalService: BsModalService,
  ) { }

  loginForm: FormGroup;
  message = '';

  isLogin = true;
  isServiceRunning = false;
  isPasswordVisible = false;

  isScreenBig = false;

  otp = '';
  isOTPCorrect = true;
  timer: number;
  isVerified = false;

  isForgotPassOTP = false;

  isResetPassword = false;


  role = UserRole;
  isVerifyOTP = false;
  isRegistration = false;
  isForgotPassword = false;
  isConfirmPasswordVisible = false;
  signupForm: FormGroup;
  password = '';
  email = new FormControl('', [Validators.required, Validators.email]);
  resetPassword = new FormControl('', [Validators.required, Validators.minLength(7)]);

  isPasswordReset = false;

  ngOnInit() {
    if (window.screen.width > 1150) { this.isScreenBig = true; }
    this.loginForm = new FormGroup({
      emailLogin: new FormControl(null, [Validators.required, Validators.email]),
      passwordLogin: new FormControl(null, [Validators.required]),
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.isServiceRunning = true;
      this.authService.login({
        email: (this.loginForm.get('emailLogin')
          .value).toLowerCase(), password: this.loginForm.get('passwordLogin').value
      })
        .then((data: any) => {
          if (data.error) {
            this.message = 'Invalid email or password!';
          }
          else if (data.email) {
            if (data.role !== 2) {
              this.modalRef.hide();
              window.location.reload();
              window.localStorage.setItem('id', window.btoa(JSON.stringify(data)));
            }
            else { this.message = 'User not found!'; }
          }
          this.isServiceRunning = false;
        });
    }
  }


  resendOTP() {
    this.isServiceRunning = true;
    this.authService.getOTP({ email: this.signupForm.get('email').value }).subscribe((data: any) => {
      if (data.data === true) {
        this.toast.showToast('Passcode Sent Successfully!');
        let counter = 30;
        timer(1000, 1000)
          .pipe(
            takeWhile(() => counter > 0),
            tap(() => counter--)
          )
          .subscribe(() => {
            this.timer = counter;
          });
        this.isServiceRunning = false;
      }
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

  loginVisible() {
    setTimeout(() => {
      this.hideAll();
      this.isLogin = true;
    }, 300);
  }

  showLogin() {
    this.hideAll();
    this.isLogin = true;
  }

  hideAll() {
    this.isResetPassword = false;
    this.isLogin = false;
    this.isRegistration = false;
    this.isForgotPassword = false;
    this.isVerifyOTP = false;
    this.isPasswordReset = false;
    this.message = '';
  }


  verifyOTP() {
    this.isServiceRunning = true;
    if (this.isForgotPassOTP) {
      const data = {
        email: this.email.value,
        otp: this.otp
      };
      this.authService.verify(data).subscribe((res: any) => {
        if (res.data === true) {
          this.isVerified = true;
          this.hideAll();
          this.isResetPassword = true;
        }
        else { this.isOTPCorrect = false; }
        this.isServiceRunning = false;
      });
    }
    else {
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
  }

  back() {
    this.hideAll();
    this.isLogin = true;
  }


  forgotPassword() {
    if (this.email.valid) {
      this.isServiceRunning = true;
      this.authService.getOTP({ email: this.email.value }).subscribe((data: any) => {
        if (data.data === true) {
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
          this.isForgotPassOTP = true;
        }
        this.isServiceRunning = false;
      });
    }
  }

  restPassword() {
    this.resetPassword.markAsTouched();
    if (this.resetPassword.value) {
      const dbopeartion: DbOperation = {
        collection: 'users',
        data: { password: this.resetPassword.value },
        query: { email: this.email.value }
      };
      this.authService.update(dbopeartion).then((data: any) => {
        if (data.data === true) {
          this.hideAll();
          this.toast.showToast('Password Reseted!');
          this.isLogin = true;
          this.isServiceRunning = false;
        }
      });
    }
  }


}
