import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailReportCashbackReportLayoutComponent } from './fail-report-cashback-report-layout.component';

describe('FailReportCashbackReportLayoutComponent', () => {
  let component: FailReportCashbackReportLayoutComponent;
  let fixture: ComponentFixture<FailReportCashbackReportLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailReportCashbackReportLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailReportCashbackReportLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
