import { FormControl, Validators } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DbOperation } from './../../models/dbOperation';
import { AuthService } from './../../services/auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AllJobPostsComponent } from '../all-job-posts/all-job-posts.component';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dbService: AuthService,
    public modalController: ModalController,
    private modalService: BsModalService,
  ) { }


  isServiceRunning = false;
  skillName = new FormControl(null, Validators.required);
  postId = '';
  post: any = {};
  minExp: number;
  candidatesArray: any[] = [];

  public modalRef: BsModalRef;

  allAplications: any[] = [];
  aplications: any[] = [];

  filterTemplate: any = {};

  skillsOptions: string[] = ['Java', 'Event Management', 'Angular 10', 'HTML', 'CSS',
    'Java Script', 'Type Script', 'Firebase', 'Management', 'Accounting'];
  filteredSkills: Observable<string[]>;
  skillsArray: any[] = [];

  // logic for top nav bar
  isApplicationRecieved = true;
  isShortlisted = false;
  isHired = false;
  isRejected = false;
  totalHired = 0;
  totalShortlisted = 0;
  totalRejected = 0;
  applicationRecieved = 0;
  confirmModalStatus = 'Shortlisted';
  curentUserId: any;

  allReferedProfiles: any = [];

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.jobId) {
        this.postId = params.jobId;
        this.getDetails();
        this.getReferedProfiles();
      }
    });

    this.filteredSkills = this.skillName.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSkills(value))
    );
  }

  private _filterSkills(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.skillsOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  closeModal() {
    this.modalRef.hide();
  }

  getDetails() {
    this.isServiceRunning = true;
    const operation: DbOperation = {
      collection: 'jobposts',
      query: { _id: this.postId }
    };
    this.dbService.find(operation).subscribe((data: any) => {
      this.isServiceRunning = false;
      if (data.data.length > 0) {
        this.isServiceRunning = true;
        this.post = data.data[0];
        const db: DbOperation = {
          collection: 'applyJob',
          query: { jobPostId: this.postId }
        };
        this.dbService.find(db).subscribe((candidates: any) => {
          this.isServiceRunning = false;

          if (candidates.data.length > 0) {
            this.isServiceRunning = true;
            this.allAplications = [];
            this.candidatesArray = candidates.data;
            this.totalHired = 0;
            this.totalRejected = 0;
            this.totalShortlisted = 0;
            this.applicationRecieved = 0;
            candidates.data.forEach((cand: any) => {
              this.isServiceRunning = true;
              const dbOperation: DbOperation = {
                collection: 'users',
                query: { _id: cand.candidateId }
              };
              this.dbService.find(dbOperation).subscribe((user: any) => {
                if (user.data.length > 0) {
                  this.isServiceRunning = false;
                  const candidate: any = user.data[0];
                  console.log(user.data[0]._id);
                  candidate.appliedOn = cand.date;
                  candidate.appliedId = cand._id;
                  candidate.status = cand.status ? cand.status : null;
                  console.log(candidate);
                  this.allAplications.push(candidate);
                  if (candidate.status === null) {
                    this.aplications.push(candidate);
                  }
                  switch (cand.status) {
                    case 'Shortlisted': {
                      this.totalShortlisted++;
                      break;
                    }
                    case 'Hired': {
                      this.totalHired++;
                      break;
                    }
                    case 'Rejected': {
                      this.totalRejected++;
                      break;
                    }
                  }
                  if (cand.status === null || cand.status === undefined) { this.applicationRecieved++; }
                }
              });
            });
          }
        });
      }
    });
  }

  getReferedProfiles() {
    this.isServiceRunning = true;
    const operation: DbOperation = {
      collection: 'referedProfiles',
      query: { jobId: this.postId }
    };
    this.dbService.find(operation).subscribe((data: any) => {
      this.isServiceRunning = false;
      if (data.data.length > 0) {
        console.log(data.data);
        this.allReferedProfiles = data.data;
      }
    });
  }

  openResume(resume: any) {
    window.open(resume);
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: AllJobPostsComponent,
    });
    return await modal.present();
  }

  calculateTotalExp(post: any) {
    const dateFirst = post.endDate !== null ? new Date(post.endDate) : new Date();
    const dateSecond = new Date(post.startDate);
    // time difference
    const timeDiff = Math.abs(dateFirst.getTime() - dateSecond.getTime());

    // days difference
    const diffYears = (timeDiff / (1000 * 3600 * 24 * 365));

    return diffYears.toFixed(0) + ' Years';
  }

  seeResume(resume: string, _id: any, profileViews: any) {
    const db: DbOperation = {
      collection: 'users',
      data: { profileViews: profileViews ? profileViews + 1 : 1 },
      query: {_id}
    };
    this.dbService.update(db).then((data: any) => {
      if (data.data) {
        window.open(resume);
      }
    });
  }
  openFilter(template: any) {
    this.filterTemplate = template;
    this.modalRef = this.modalService.show(template, { class: 'filter-modal', ignoreBackdropClick: true, animated: true });
  }

  seeResults() {
    console.log(this.skillsArray);
    this.isServiceRunning = true;
    this.candidatesArray.forEach((cand: any, index) => {
      const dbOperation: DbOperation = {
        collection: 'users',
        query: { _id: cand.candidateId, totalWorkExp: { $gt: this.minExp ? this.minExp - 1 : 0 } }
      };
      this.allAplications = [];
      this.dbService.find(dbOperation).subscribe((user: any) => {
        this.isServiceRunning = false;
        if (user.data.length > 0) {
          const candidate: any = user.data[0];
          if (this.skillsArray.length > 0) {
            this.skillsArray.forEach(skill => {
              if (candidate.skills.find((data: string) => data.includes(skill))) {
                const localCandidate: any = user.data[0];
                localCandidate.appliedOn = cand.date;
                localCandidate.appliedId = cand._id;
                localCandidate.status = cand.status ? cand.status : null;
                this.aplications.push(localCandidate);
              }
            });
          }
          else {
            candidate.appliedOn = candidate.date;
            this.allAplications.push(candidate);
          }
        }
      });
      if (index + 1 === this.candidatesArray.length) { this.closeModal(); }
    });
  }

  openSkillModal(template: any) {
    this.modalRef.hide();
    this.skillName.reset();
    this.modalRef = this.modalService.show(template, { id: 1, ignoreBackdropClick: true, animated: true });
  }

  addSkill() {
    this.skillName.markAsTouched();
    if (this.skillName.value) {
      this.skillsArray.push(this.skillName.value);
      this.modalRef.hide();
      this.openFilter(this.filterTemplate);
    }
  }

  removeTag(index: any) {
    this.skillsArray.splice(index, 1);
  }

  removeFromFilter(index: any) {
    this.skillsArray.splice(index, 1);
    this.seeResults();
  }

  removeExp() {
    this.minExp = null;
    this.seeResults();
  }

  clearFilter() {
    this.skillsArray = [];
    this.minExp = null;
    this.getDetails();
  }

  changeTopMenu(id: number) {
    this.isApplicationRecieved = false;
    this.isShortlisted = false;
    this.isHired = false;
    this.isRejected = false;

    switch (id) {
      case 0: {
        this.isApplicationRecieved = true;
        this.aplications = this.allAplications.filter((user: any) => user.status === null);
        break;
      }
      case 1: {
        this.isShortlisted = true;
        this.aplications = this.allAplications.filter((user: any) => user.status === 'Shortlisted');
        break;
      }
      case 2: {
        this.isHired = true;
        this.aplications = this.allAplications.filter((user: any) => user.status === 'Hired');
        break;
      }
      case 3: {
        this.isRejected = true;
        this.aplications = this.allAplications.filter((user: any) => user.status === 'Rejected');
        break;
      }
    }
  }

  shortlistApplicant(id: any) {
    this.isServiceRunning = true;
    const db: DbOperation = {
      collection: 'applyJob',
      data: { status: 'Shortlisted' },
      query: { id },
    };
    this.dbService.update(db).then((data: any) => {
      console.log(data);
      this.getDetails();
      this.isServiceRunning = false;
      this.modalRef.hide();
      this.aplications = this.allAplications.filter((user: any) => user.status === 'Shortlisted');
    });
  }

  hireApplicant(id: any) {
    this.isServiceRunning = true;
    const db: DbOperation = {
      collection: 'applyJob',
      data: { status: 'Hired' },
      query: { id },
    };
    this.dbService.update(db).then((data: any) => {
      this.getDetails();
      this.isServiceRunning = false;
      this.modalRef.hide();
      this.aplications = this.allAplications.filter((user: any) => user.status === 'Hired');
    });
  }

  rejectApplicant(id: any) {
    this.isServiceRunning = true;
    const db: DbOperation = {
      collection: 'applyJob',
      data: { status: 'Rejected' },
      query: { id },
    };
    this.dbService.update(db).then((data: any) => {
      this.getDetails();
      this.isServiceRunning = false;
      this.modalRef.hide();
      this.aplications = this.allAplications.filter((user: any) => user.status === 'Rejected');
    });
  }
  openConfirmModal(template: any, id: any, status: any) {
    this.curentUserId = id;
    this.confirmModalStatus = status;
    this.modalRef = this.modalService.show(template, { animated: true });
  }

}
