import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddOrganizationComponent } from '../add-organization/add-organization.component';

@Component({
  selector: 'app-employer-page',
  templateUrl: './employer-page.component.html',
  styleUrls: ['./employer-page.component.scss'],
})
export class EmployerPageComponent implements OnInit {

  constructor(
    public modalRef: BsModalRef,
    private modalService: BsModalService,

  ) { }

  ngOnInit() { }

  addOrganization() {
    this.modalRef = this.modalService.show(AddOrganizationComponent, { class: "full-modal bg-light-grey", ignoreBackdropClick: true, animated: true })
  }

}
