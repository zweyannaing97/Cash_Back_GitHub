import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorWiseDetailReportFilterComponent } from './operator-wise-detail-report-filter.component';

describe('OperatorWiseDetailReportFilterComponent', () => {
  let component: OperatorWiseDetailReportFilterComponent;
  let fixture: ComponentFixture<OperatorWiseDetailReportFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorWiseDetailReportFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorWiseDetailReportFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
