import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAlreadyExistComponent } from './file-already-exist.component';

describe('FileAlreadyExistComponent', () => {
  let component: FileAlreadyExistComponent;
  let fixture: ComponentFixture<FileAlreadyExistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileAlreadyExistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileAlreadyExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
