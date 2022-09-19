import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCashbackReportLayoutComponent } from './individual-cashback-report-layout.component';

describe('IndividualCashbackReportLayoutComponent', () => {
  let component: IndividualCashbackReportLayoutComponent;
  let fixture: ComponentFixture<IndividualCashbackReportLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualCashbackReportLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualCashbackReportLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
