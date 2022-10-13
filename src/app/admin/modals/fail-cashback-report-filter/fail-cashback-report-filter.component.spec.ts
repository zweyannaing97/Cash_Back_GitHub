import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailCashbackReportFilterComponent } from './fail-cashback-report-filter.component';

describe('FailCashbackReportFilterComponent', () => {
  let component: FailCashbackReportFilterComponent;
  let fixture: ComponentFixture<FailCashbackReportFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailCashbackReportFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailCashbackReportFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
