import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyWiseDetailReportFilterComponent } from './company-wise-detail-report-filter.component';

describe('CompanyWiseDetailReportFilterComponent', () => {
  let component: CompanyWiseDetailReportFilterComponent;
  let fixture: ComponentFixture<CompanyWiseDetailReportFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyWiseDetailReportFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyWiseDetailReportFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
