import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBulkCashbackConfigurationReportComponent } from './view-bulk-cashback-configuration-report.component';

describe('ViewBulkCashbackConfigurationReportComponent', () => {
  let component: ViewBulkCashbackConfigurationReportComponent;
  let fixture: ComponentFixture<ViewBulkCashbackConfigurationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBulkCashbackConfigurationReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBulkCashbackConfigurationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
