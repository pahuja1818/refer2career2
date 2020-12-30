import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReferJobPostService {

  headers = new HttpHeaders({ 'content-type': 'application/json' });

  public baseUrl = window.location.host.includes('instajob') ? 'https://instajobapp.herokuapp.com' : 'http://localhost:8084';

  post: any = undefined;
  jobPosts: Subject<any> = new Subject<any>();
  postDetail: any = {};

  myApplications: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  getPosts() {
    if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === 1) {
    }
  }

  referJobPost(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/referJobPost`, body, { headers: this.headers });
  }

  getReferedJobPosts(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/getReferedJobPosts`, body, { headers: this.headers });
  }
}
