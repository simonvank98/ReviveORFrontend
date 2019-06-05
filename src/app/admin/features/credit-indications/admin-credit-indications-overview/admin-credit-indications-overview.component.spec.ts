import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminCreditIndicationsOverviewComponent} from './admin-credit-indications-overview.component';

describe('AdminCreditIndicationsOverviewComponent', () => {
  let component: AdminCreditIndicationsOverviewComponent;
  let fixture: ComponentFixture<AdminCreditIndicationsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreditIndicationsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreditIndicationsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
