import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptenCashbackDashboardFilterComponent } from './topten-cashback-dashboard-filter.component';

describe('ToptenCashbackDashboardFilterComponent', () => {
  let component: ToptenCashbackDashboardFilterComponent;
  let fixture: ComponentFixture<ToptenCashbackDashboardFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToptenCashbackDashboardFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToptenCashbackDashboardFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
