import { DbOperation } from './../../models/dbOperation';
import { AuthService } from './../../services/auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {

  postId = '';
  post: any = {};

  constructor(
    private route: ActivatedRoute,
    private dbService: AuthService
  ) { }

  allAplications: any[] = [];

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.jobId) {
        this.postId = params.jobId;
        const operation: DbOperation = {
          collection: 'jobposts',
          query: { _id: this.postId }
        };
        this.dbService.find(operation).subscribe((data: any) => {
          if (data.data.length > 0) {
            this.post = data.data[0];
            const db: DbOperation = {
              collection: 'applyJob',
              query: { jobPostId: this.postId }
            };
            this.dbService.find(db).subscribe((candidates: any) => {
              if (candidates.data.length > 0) {
                candidates.data.forEach(element => {
                  const dbOperation: DbOperation = {
                    collection: 'users',
                    query: { _id: element.candidateId }
                  };
                  this.dbService.find(dbOperation).subscribe((user: any) => {
                    if (user.data.length > 0) {
                      console.log(user.data[0]);
                      const candidate: any = user.data[0];
                      candidate.appliedOn = element.date;
                      this.allAplications.push(candidate);
                    }
                  });
                });
              }
            });
          }

        });
      }
    });
  }
}
