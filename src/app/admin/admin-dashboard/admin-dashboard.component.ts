import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {}

  toggle() {
    if (window.screen.width < 990) {
      this.menu.toggle();
    }
  }



}
