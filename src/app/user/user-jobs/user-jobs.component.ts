import { Router } from '@angular/router';
import { JobPostServiceService } from './../../shared/services/job-post-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-user-jobs',
  templateUrl: './user-jobs.component.html',
  styleUrls: ['./user-jobs.component.scss'],
})
export class UserJobsComponent implements OnInit {

  allJobPost: any[] = [];
  filteredJobPosts: any[] = [];

  myControl = new FormControl();
  options: any[] = ['Angular Developer', 'Manager', 'Chartered accountant'];
  filteredOptions: Observable<any[]>;

  constructor(
    private jobPostService: JobPostServiceService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.myControl.valueChanges.subscribe(x => this.filterJobPosts(x));
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

    this.jobPostService.getPosts();
    this.jobPostService.jobPosts.subscribe((data: any) => {
      this.filteredJobPosts = data;
      this.allJobPost = data;
    });
  }

  seeDetails(data: any) {
    this.jobPostService.postDetail = data;
    this.router.navigateByUrl(`/candidate/jobs/job-detail/${data._id}`);
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  filterJobPosts(search: string) {
    search = search.toLowerCase();
    this.filteredJobPosts = [];
    this.allJobPost.forEach((jobPost: any, index: number) => {
      if (jobPost.jobPost.title.toLowerCase().includes(search)) {
        this.filteredJobPosts.push(JSON.stringify(jobPost));
      }
      jobPost.jobPost.skills.forEach((element: any) => {
        if (element.skillName.includes(search)) {
          this.filteredJobPosts.push(JSON.stringify(jobPost));
        }
      });
      if (this.allJobPost.length === index + 1) {
        const arr: any[] = [...new Set(this.filteredJobPosts)];
        this.filteredJobPosts = [];
        arr.forEach(data => {
          this.filteredJobPosts.push(JSON.parse(data));
        });
      }
    });
  }

}
