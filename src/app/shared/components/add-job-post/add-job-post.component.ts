import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-job-post',
  templateUrl: './add-job-post.component.html',
  styleUrls: ['./add-job-post.component.scss'],
})
export class AddJobPostComponent implements OnInit {

  fieldArray: Array<any> = [];
  newAttribute: any = {};

  firstField = true;
  firstFieldName = 'First Item name';
  isEditItems: boolean;

  addFieldValue(index) {
    if (this.fieldArray.length <= 2) {
      this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
    } else {

    }
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
  }

  constructor() { }

  ngOnInit() {}

}
