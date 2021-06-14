import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmpRecentJobPostsComponent } from './emp-recent-job-posts.component';

describe('EmpRecentJobPostsComponent', () => {
  let component: EmpRecentJobPostsComponent;
  let fixture: ComponentFixture<EmpRecentJobPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpRecentJobPostsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpRecentJobPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
