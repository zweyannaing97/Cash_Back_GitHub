import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDataTableComponent } from './file-data-table.component';

describe('FileDataTableComponent', () => {
  let component: FileDataTableComponent;
  let fixture: ComponentFixture<FileDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
