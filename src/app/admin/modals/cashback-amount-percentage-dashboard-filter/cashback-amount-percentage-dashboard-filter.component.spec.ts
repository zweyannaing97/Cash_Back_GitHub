import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbackAmountPercentageDashboardFilterComponent } from './cashback-amount-percentage-dashboard-filter.component';

describe('CashbackAmountPercentageDashboardFilterComponent', () => {
  let component: CashbackAmountPercentageDashboardFilterComponent;
  let fixture: ComponentFixture<CashbackAmountPercentageDashboardFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashbackAmountPercentageDashboardFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashbackAmountPercentageDashboardFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
