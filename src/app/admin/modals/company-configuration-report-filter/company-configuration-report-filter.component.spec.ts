import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyConfigurationReportFilterComponent } from './company-configuration-report-filter.component';

describe('CompanyConfigurationReportFilterComponent', () => {
  let component: CompanyConfigurationReportFilterComponent;
  let fixture: ComponentFixture<CompanyConfigurationReportFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyConfigurationReportFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyConfigurationReportFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
