import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPermissionsOverviewComponent } from './admin-permissions-overview.component';

describe('AdminPermissionsOverviewComponent', () => {
  let component: AdminPermissionsOverviewComponent;
  let fixture: ComponentFixture<AdminPermissionsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPermissionsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPermissionsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
