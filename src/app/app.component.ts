import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { UserRole } from './shared/models/enums';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  role = UserRole;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authService: AuthService
  ) {
    this.initializeApp();
    if (window.localStorage.getItem('id')){
      if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === UserRole.CANDIDATE) {
        this.router.navigateByUrl('/candidate');
      }
      else if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === UserRole.EMPLOYER) {
        this.router.navigateByUrl('/employer');
      }
      else if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === UserRole.ADMIN) {
        this.router.navigateByUrl('/admin');
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
