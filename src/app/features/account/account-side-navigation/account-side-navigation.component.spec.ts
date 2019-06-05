import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSideNavigationComponent } from './account-side-navigation.component';

describe('AccountSideNavigationComponent', () => {
  let component: AccountSideNavigationComponent;
  let fixture: ComponentFixture<AccountSideNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSideNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
