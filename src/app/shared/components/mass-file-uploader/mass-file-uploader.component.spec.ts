import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassFileUploaderComponent } from './mass-file-uploader.component';

describe('MassFileUploaderComponent', () => {
  let component: MassFileUploaderComponent;
  let fixture: ComponentFixture<MassFileUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassFileUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassFileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
