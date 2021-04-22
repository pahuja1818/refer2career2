import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { UserRole } from './shared/models/enums';
import { AuthService } from './shared/services/auth.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  role = UserRole;

  constructor(
    private location: Location,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authService: AuthService
  ) {
    this.initializeApp();
    if (window.localStorage.getItem('id')) {
      if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === UserRole.CANDIDATE) {
        if (!(this.location.path()).includes('referer')) {
          this.router.navigateByUrl('/referer');
        }
      }
      else if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === UserRole.ADMIN) {
        if (!(this.location.path()).includes('admin')) {
          this.router.navigateByUrl('/admin');
        }
      }
      else if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === UserRole.EMPLOYER) {
        if (!(this.location.path()).includes('recruiter')) {
          this.router.navigateByUrl('/recruiter');
        }
      }
    }
    // else { this.router.navigateByUrl('/login'); }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {

  }
}
