import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss'],
})
export class AddOrganizationComponent implements OnInit {

  constructor(
    public modalRef: BsModalRef,
  ) { }

  ngOnInit() {}


  close(){
    this.modalRef.hide()
  }

}
