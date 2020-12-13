import { Component } from '@angular/core';
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
export class AppComponent {
  role = UserRole;

  constructor(
    private _location: Location,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authService: AuthService
  ) {
    this.initializeApp();
    if (window.localStorage.getItem('id')) {
      if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === UserRole.CANDIDATE) {
        if (!(this._location.path()).includes('candidate')) {
          this.router.navigateByUrl('/candidate');
        }
      }
      else if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === UserRole.ADMIN) {
        if (!(this._location.path()).includes('admin')) {
          this.router.navigateByUrl('/admin');
        }
      }
      else if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === UserRole.EMPLOYER) {
      }
    }
    else { this.router.navigateByUrl('/home'); }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
