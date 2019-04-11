import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductsOverviewComponent } from './admin-products-overview.component';

describe('AdminProductsOverviewComponent', () => {
  let component: AdminProductsOverviewComponent;
  let fixture: ComponentFixture<AdminProductsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
