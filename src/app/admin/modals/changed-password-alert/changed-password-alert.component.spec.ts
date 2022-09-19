import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedPasswordAlertComponent } from './changed-password-alert.component';

describe('ChangedPasswordAlertComponent', () => {
  let component: ChangedPasswordAlertComponent;
  let fixture: ComponentFixture<ChangedPasswordAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangedPasswordAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangedPasswordAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
