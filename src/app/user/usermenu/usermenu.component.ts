import { element } from 'protractor';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { MenuController } from '@ionic/angular';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.scss'],
})
export class UsermenuComponent implements OnInit {

  modalRef: BsModalRef;
  user: any;

  scroll() {
    document.getElementById('jobs').scrollIntoView({
      behavior: 'smooth'
    });
  }

  constructor(
    private menu: MenuController,
    private modalService: BsModalService,
    private authService: AuthService,
  ) { 
    this.user = this.authService.user;
  }

  ngOnInit() {
  }

  toggle() {
    if (window.screen.width < 990) {
      this.menu.toggle();
    }
  }


}
