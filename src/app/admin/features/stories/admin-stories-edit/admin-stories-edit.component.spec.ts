import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStoriesEditComponent } from './admin-stories-edit.component';

describe('AdminStoriesEditComponent', () => {
  let component: AdminStoriesEditComponent;
  let fixture: ComponentFixture<AdminStoriesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStoriesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStoriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
