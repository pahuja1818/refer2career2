import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.scss'],
})
export class CandidateDashboardComponent implements OnInit {

  constructor() { }

  user = JSON.parse(window.atob(window.localStorage.getItem('id')));

  ngOnInit() {}

  logout(){
    window.localStorage.removeItem('id');
    window.location.reload();
  }

}
