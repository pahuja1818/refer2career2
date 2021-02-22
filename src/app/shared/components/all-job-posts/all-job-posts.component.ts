import { DbOperation } from './../../models/dbOperation';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { JobPostServiceService } from '../../services/job-post-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { thLocale } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-all-job-posts',
  templateUrl: './all-job-posts.component.html',
  styleUrls: ['./all-job-posts.component.scss'],
})
export class AllJobPostsComponent implements OnInit {

  role = JSON.parse(window.atob(window.localStorage.getItem('id'))).role;

  allJobPost: any[] = [];
  filteredJobPosts: any[] = [];

  myControl = new FormControl();
  options: any[] = ['Angular Developer', 'Manager', 'Chartered accountant'];
  filteredOptions: Observable<any[]>;

  isSortByExpanded = false;
  isLocationExpanded = false;
  isPartTimeExpanded = false;
  isRemoteExpanded = false;
  isExperienceExpanded = false;

  allLocations: Set<string> = new Set<string>();
  selectedLocations: Set<string> = new Set<string>();
  selectedLocationsArray: any[] = [];

  isRelevent = false;
  isServiceRunning = false;

  isSortBy = false;

  refineInitial: any = {
    partTime: false,
    remote: false,
    minExp: 0,
    location: []
  };

  refine: any = {
    partTime: false,
    remote: false,
    minExp: 0,
    location: []
  };

  isChanged(): boolean {
    return !(JSON.stringify(this.refine) === JSON.stringify(this.refineInitial));
  }

  closeSortBy(value: any) {
    this.isSortBy = value;
    this.isSortByExpanded = false;
  }

  constructor(
    private jobPostService: JobPostServiceService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.myControl.valueChanges.subscribe(x => this.filterJobPosts(x));
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

    const db: DbOperation = {
      collection: 'jobposts',
      query: { 'jobPost.verified': true },
    };
    this.authService.find(db).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.filteredJobPosts = data.data;
        this.allJobPost = data.data;
        this.sortByDate();
      }
    });

    const dbOpeartion: DbOperation = {
      collection: 'jobposts',
      query: { 'jobPost.verified': true },
      selectedFields: { 'jobPost.location': 1 },
    };
    this.authService.find(dbOpeartion).subscribe((data: any) => {
      if (data.data.length > 0) {
        data.data.forEach((ele: any) => {
          this.allLocations.add(ele.jobPost.location);
        });
      }
    });
  }

  seeDetails(data: any) {
    if (this.role === 2) {
      this.router.navigateByUrl(`/referer/jobs/job-detail/${data._id}`);
    }

    else if (this.role === 0) {
      this.router.navigateByUrl(`/admin/jobs/detail/${data._id}`);
    }

    else if (this.role === 1) {
      this.router.navigateByUrl(`/recruiter/job-posts/detail/${data._id}`);
    }
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
        const name: string = element.skillName;
        if (name.toLowerCase().includes(search)) {
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

  sortByDate() {
    this.filteredJobPosts.sort((a: any, b: any) => {
      const dateA: any = new Date(a.jobPost.createdAt);
      const dateB: any = new Date(b.jobPost.createdAt);
      return dateB - dateA;
    });
  }

  getExperience(value: number) {
    return `${value} - ${value + 1}`;
  }

  getStartDate(date: any) {
    const date1: any = new Date();
    const date2: any = new Date(date);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 7;
  }

  updateLocation(event: any, location: string) {
    if (event.checked === true) {
      this.selectedLocations.add(location);
    }
    else { this.selectedLocations.delete(location); }
    this.refine.location = [...this.selectedLocations];
    console.log(this.isChanged());
  }

  refineJobs() {
    this.isServiceRunning = true;
    const dbOpeartion: DbOperation = {
      collection: 'jobposts',
      query: { 'jobPost.verified': true },
    };
    if (this.refine.partTime) {
      dbOpeartion.query['jobPost.partTime'] = this.refine.partTime;
    }

    if (this.refine.remote) {
      dbOpeartion.query['jobPost.jobType'] = this.refine.remote ? 'Work from home' : 'In office';
    }

    if (this.selectedLocations.size > 0) {
      dbOpeartion.query['jobPost.location'] = { $in: [...this.selectedLocations] };
    }

    if (this.refine.minExp > 0) {
      dbOpeartion.query['jobPost.experience'] = { $gt: this.refine.minExp ? this.refine.minExp - 1 : 0 };
    }

    this.authService.find(dbOpeartion).subscribe((data: any) => {
      if (data.data) {
        this.filteredJobPosts = data.data;
        this.allJobPost = data.data;
        this.refineInitial.sortBy = this.refine.sortBy,
          this.refineInitial.partTime = this.refine.partTime,
          this.refineInitial.remote = this.refine.remote,
          this.refineInitial.minExp = this.refine.minExp,
          this.refineInitial.location = this.refine.location;
        this.sortByDate();
        this.isServiceRunning = false;
      }
    });
  }
}
