import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminStoriesOverviewComponent} from './admin-stories-overview.component';

describe('AdminStoriesOverviewComponent', () => {
  let component: AdminStoriesOverviewComponent;
  let fixture: ComponentFixture<AdminStoriesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStoriesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStoriesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
