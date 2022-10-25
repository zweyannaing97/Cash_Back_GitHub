import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFailReportCashbackReportComponent } from './view-fail-report-cashback-report.component';

describe('ViewFailReportCashbackReportComponent', () => {
  let component: ViewFailReportCashbackReportComponent;
  let fixture: ComponentFixture<ViewFailReportCashbackReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFailReportCashbackReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFailReportCashbackReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
