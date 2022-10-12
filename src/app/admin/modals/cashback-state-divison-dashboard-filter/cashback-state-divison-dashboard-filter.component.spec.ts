import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbackStateDivisonDashboardFilterComponent } from './cashback-state-divison-dashboard-filter.component';

describe('CashbackStateDivisonDashboardFilterComponent', () => {
  let component: CashbackStateDivisonDashboardFilterComponent;
  let fixture: ComponentFixture<CashbackStateDivisonDashboardFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashbackStateDivisonDashboardFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashbackStateDivisonDashboardFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
