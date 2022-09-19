import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordLayoutComponent } from './forgot-password-layout.component';

describe('ForgotPasswordLayoutComponent', () => {
  let component: ForgotPasswordLayoutComponent;
  let fixture: ComponentFixture<ForgotPasswordLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
