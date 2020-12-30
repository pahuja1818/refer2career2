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



  constructor(
    private menu: MenuController,
    private modalService: BsModalService,
  ) { }

  ngOnInit() { }



  toggle() {
    if (window.screen.width < 990) {
      this.menu.toggle();
    }
  }



}
