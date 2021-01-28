import { Router } from '@angular/router';
import { DbOperation } from './../../models/dbOperation';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-applicants',
  templateUrl: './manage-applicants.component.html',
  styleUrls: ['./manage-applicants.component.scss'],
})
export class ManageApplicantsComponent implements OnInit {

  allPosts: any = [];
  isServiceRunning = false;

  constructor(
    private dbService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getAllJobs();
    console.log(JSON.parse(window.atob(window.localStorage.getItem('id')))._id)
  }

  getAllJobs() {
    this.isServiceRunning = true;
    let dbOperation: DbOperation = {
      collection: 'jobposts',
      query: { 'jobPost.createdBy': JSON.parse(window.atob(window.localStorage.getItem('id')))._id }
    }
    this.dbService.find(dbOperation).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.allPosts = data.data;
        this.allPosts.sort((a: any, b: any) => {
          let c: any = new Date(a.jobPost.createdAt);
          let d: any = new Date(b.jobPost.createdAt);
          return d - c;
        });
        this.isServiceRunning = false;
      }
    })
  }

  navigate(id: any) {
    console.log(id);
    this.router.navigateByUrl(`/recruiter/applicants/${id}`);
  }

}
