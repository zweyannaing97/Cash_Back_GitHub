import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkCashbackReportLayoutComponent } from './bulk-cashback-report-layout.component';

describe('BulkCashbackReportLayoutComponent', () => {
  let component: BulkCashbackReportLayoutComponent;
  let fixture: ComponentFixture<BulkCashbackReportLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkCashbackReportLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkCashbackReportLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
