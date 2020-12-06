import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {


  currentUser: any = {};

  headers = new HttpHeaders({ 'content-type': 'application/json' });

  public baseUrl = window.location.host.includes('instajob') ? 'https://instajobapp.herokuapp.com' : 'http://localhost:8084';

  constructor(private http: HttpClient) { }

  addOrganization(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/add/organization`, body, { headers: this.headers }).toPromise();
  }

  updateOrganization(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/update/organization`, body, { headers: this.headers }).toPromise();
  }

  getOrganization(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/get/orgination`, body, { headers: this.headers });
  }

  getAllOrganizations(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/getAll/orginations`, body, { headers: this.headers });
  }
}
