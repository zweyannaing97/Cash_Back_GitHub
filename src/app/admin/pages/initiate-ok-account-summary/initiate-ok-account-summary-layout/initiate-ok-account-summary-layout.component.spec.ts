import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateOkAccountSummaryLayoutComponent } from './initiate-ok-account-summary-layout.component';

describe('InitiateOkAccountSummaryLayoutComponent', () => {
  let component: InitiateOkAccountSummaryLayoutComponent;
  let fixture: ComponentFixture<InitiateOkAccountSummaryLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiateOkAccountSummaryLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiateOkAccountSummaryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
