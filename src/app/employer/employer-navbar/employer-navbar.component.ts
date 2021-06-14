import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-navbar',
  templateUrl: './employer-navbar.component.html',
  styleUrls: ['./employer-navbar.component.scss'],
})
export class EmployerNavbarComponent implements OnInit {

  constructor(
    private menu: MenuController,
    private modalRef: BsModalRef,
    private modalService: BsModalService,
    private router: Router,
  ) { }

  url = '';

  navigate(url: string){
    this.router.navigateByUrl(url);
  }

  ngOnInit() {
    this.url = this.router.url;
  }

  toggle() {
    this.menu.toggle();
  }

  openModal(template: any) {
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
