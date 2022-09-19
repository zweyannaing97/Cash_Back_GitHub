import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCashBackReportFilterComponent } from './individual-cash-back-report-filter.component';

describe('IndividualCashBackReportFilterComponent', () => {
  let component: IndividualCashBackReportFilterComponent;
  let fixture: ComponentFixture<IndividualCashBackReportFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualCashBackReportFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualCashBackReportFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
