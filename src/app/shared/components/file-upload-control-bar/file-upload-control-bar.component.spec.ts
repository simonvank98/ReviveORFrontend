import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FileUploadControlBarComponent} from './file-upload-progressbar.component';

describe('FileUploadProgressbarComponent', () => {
  let component: FileUploadControlBarComponent;
  let fixture: ComponentFixture<FileUploadControlBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadControlBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadControlBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
