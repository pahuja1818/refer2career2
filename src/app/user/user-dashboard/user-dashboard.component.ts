import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ModalController } from '@ionic/angular';
import { AllJobPostsComponent } from 'src/app/shared/components/all-job-posts/all-job-posts.component';



@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  modalRef: BsModalRef;


  constructor(
    private menu: MenuController,
    private modalService: BsModalService,
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




}
