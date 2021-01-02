import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-menu',
  templateUrl: './employer-menu.component.html',
  styleUrls: ['./employer-menu.component.scss'],
})
export class EmployerMenuComponent implements OnInit {

  user: any = {};


  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(window.atob(window.localStorage.getItem('id')));
    console.log(this.user);
  }

}
