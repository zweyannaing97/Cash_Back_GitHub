import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompanyWiseReportDetailComponent } from './view-company-wise-report-detail.component';

describe('ViewCompanyWiseReportDetailComponent', () => {
  let component: ViewCompanyWiseReportDetailComponent;
  let fixture: ComponentFixture<ViewCompanyWiseReportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCompanyWiseReportDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCompanyWiseReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
