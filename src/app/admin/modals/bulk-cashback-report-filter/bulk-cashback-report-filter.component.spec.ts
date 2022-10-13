import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkCashbackReportFilterComponent } from './bulk-cashback-report-filter.component';

describe('BulkCashbackReportFilterComponent', () => {
  let component: BulkCashbackReportFilterComponent;
  let fixture: ComponentFixture<BulkCashbackReportFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkCashbackReportFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkCashbackReportFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
