import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers = new HttpHeaders({ 'content-type': 'application/json' })

  public baseUrl = window.location.host.includes("8084") ? '' : "http://localhost:8084";

  constructor(private http: HttpClient) { }

  registerCandidate(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/register/candidate`, body, { 'headers': this.headers });
  }

  verifyOTP(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/verify/candidate`, body, { 'headers': this.headers }).toPromise();
  }

  login(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/login`, body, { 'headers': this.headers }).toPromise();
  }


}
