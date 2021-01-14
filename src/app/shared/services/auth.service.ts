import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: Subject<any> = new Subject<any>();

  headers = new HttpHeaders({ 'content-type': 'application/json' });

  public baseUrl = window.location.host.includes('localhost') ? 'http://localhost:8084' : 'https://instajobapp.herokuapp.com';

  constructor(private http: HttpClient) {
    this.getCurrentUser();
  }

  getCurrentUser() {
    if (window.localStorage.getItem('id')) {
      this.getDetails({ email: JSON.parse(window.atob(window.localStorage.getItem('id'))).email })
        .subscribe((data: any) => {
          this.currentUser.next(data.data);
          console.log(data);
        });
    }
  }

  registerCandidate(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/register/candidate`, body, { headers: this.headers });
  }

  verifyOTP(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/verify/candidate`, body, { headers: this.headers }).toPromise();
  }

  login(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/login`, body, { headers: this.headers }).toPromise();
  }

  updateAdminDetails(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/updateAdminDetails`, body, { headers: this.headers }).toPromise();
  }
  updateUserDetails(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/updateUserDetails`, body, { headers: this.headers }).toPromise();
  }

  getDetails(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/getDetails`, body, { headers: this.headers });
  }

}
