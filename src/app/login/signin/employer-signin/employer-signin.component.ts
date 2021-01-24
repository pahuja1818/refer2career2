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


@Component({
  selector: 'app-employer-signin',
  templateUrl: './employer-signin.component.html',
  styleUrls: ['./employer-signin.component.scss'],
})
export class EmployerSigninComponent implements OnInit {

  loginForm: FormGroup;
  message = '';
  isServiceRunning = false;

  constructor(
    public modalRef: BsModalRef,
    private authService: AuthService,
    private router: Router,
    private toast: ToastService,
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
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

}
