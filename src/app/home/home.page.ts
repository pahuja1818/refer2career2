import { Component, OnInit } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SigninComponent } from '../login/signin/signin.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
  }

  openLoginPage() {
    this.modalRef = this.modalService.show(SigninComponent, { class: 'half-modal', ignoreBackdropClick: true, animated: true });
  }


  scroll(id: any) {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  }



}

$(document).ready(() => {
  ($('.customer-logos') as any).slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});




