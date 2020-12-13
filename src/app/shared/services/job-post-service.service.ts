import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JobPostServiceService {

  headers = new HttpHeaders({ 'content-type': 'application/json' });

  public baseUrl = window.location.host.includes('instajob') ? 'https://instajobapp.herokuapp.com' : 'http://localhost:8084';

  post: any = undefined;
  postDetail: any = {}; 
  
  constructor(private http: HttpClient) { }

  addJobPost(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/add/jobpost`, body, { headers: this.headers });
  }

  updateJobPost(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/update/jobpost`, body, { headers: this.headers });
  }

  deleteJobPost(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/delete/jobpost`, body, { headers: this.headers });
  }

  getAllJobPosts(){
    return this.http.post(this.baseUrl + `/api/getAll/jobposts`, { headers: this.headers });
  }

  getJobPost(data: any){
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + `/api/get/jobpost`, { headers: this.headers });
  }
}
