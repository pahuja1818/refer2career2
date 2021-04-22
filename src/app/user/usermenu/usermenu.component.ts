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
  }

  ngOnInit() {
    this.user = JSON.parse(window.atob(window.localStorage.getItem('id')));
    // this.user = this.authService.user;
    this.getUser();
  }

  toggle() {
    if (window.screen.width < 990) {
      this.menu.toggle();
    }
  }

  getUser() {
   // this.isServiceRunning = true;
    this.authService.find({
      collection: 'users', query: {
        _id: this.user._id
      }
    }).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.user = data.data[0];
       // this.setBasicInfo();
        // this.isServiceRunning = false;
        window.localStorage.setItem('id', window.btoa(JSON.stringify(this.user)));
      }
    });
  }


}
