import { Component } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SigninComponent } from '../login/signin/signin.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
  ) { }

  openLoginPage() {
    this.modalRef = this.modalService.show(SigninComponent, { class: 'half-modal', ignoreBackdropClick: true, animated: true });
  }

}
