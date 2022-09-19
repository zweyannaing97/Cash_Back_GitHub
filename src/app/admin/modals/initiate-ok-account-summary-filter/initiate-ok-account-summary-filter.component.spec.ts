import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateOkAccountSummaryFilterComponent } from './initiate-ok-account-summary-filter.component';

describe('InitiateOkAccountSummaryFilterComponent', () => {
  let component: InitiateOkAccountSummaryFilterComponent;
  let fixture: ComponentFixture<InitiateOkAccountSummaryFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiateOkAccountSummaryFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiateOkAccountSummaryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
