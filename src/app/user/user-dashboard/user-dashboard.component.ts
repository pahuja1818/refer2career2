import { AuthService } from './../../shared/services/auth.service';
import { DbOperation } from './../../shared/models/dbOperation';
import { ToastService } from './../../shared/services/toast.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ModalController } from '@ionic/angular';
import { AllJobPostsComponent } from 'src/app/shared/components/all-job-posts/all-job-posts.component';
import { NgbDatepickerKeyboardService } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  modalRef: BsModalRef;

  type = '';
  description: string = '';

  constructor(
    private menu: MenuController,
    private modalService: BsModalService,
    private toast: ToastService,
    private dbService: AuthService,
  ) { }

  ngOnInit() {
  }

  toggle() {
    this.menu.toggle();
  }

  openModal(template: any) {
    this.toggle();
    this.modalRef = this.modalService.show(template, { class: 'half-modal', ignoreBackdropClick: true, animated: true });
  }

  cancel() {
    this.modalRef.hide();
  }

  loggedOut() {
    this.modalRef.hide();
    window.localStorage.removeItem('id');
    window.location.reload();
  }

  send() {

    if (this.type) {
      let arr: any[] = this.description.split(" ");
      console.log(arr.length);
      if (arr.length > 9) {
        let db: DbOperation = {
          collection: "feedback",
          data: {
            email: JSON.parse(window.atob(window.localStorage.getItem('id'))).email,
            name: JSON.parse(window.atob(window.localStorage.getItem('id'))).name,
            type: this.type,
            description: this.description,
            createdAt: new Date(),
          }
        }
        this.dbService.create(db).then((data: any) => {
          console.log(data);
          if (data.data) {
            this.toast.showToast("Sent Successfully!");
            this.cancel();
          }
          else this.toast.showToast("Something went wrong!", "bg-danger")
        })
      }
      else {
        this.toast.showToast("Please enter description of minimum 10 words!", "bg-danger")
      }
    }
    else {
      this.toast.showToast("Please Select Type!", "bg-danger")
    }
  }




}
