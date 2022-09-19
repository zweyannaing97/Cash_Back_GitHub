import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyConfigurationReportLayoutComponent } from './company-configuration-report-layout.component';

describe('ReportLayoutComponent', () => {
  let component: CompanyConfigurationReportLayoutComponent;
  let fixture: ComponentFixture<CompanyConfigurationReportLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyConfigurationReportLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyConfigurationReportLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
