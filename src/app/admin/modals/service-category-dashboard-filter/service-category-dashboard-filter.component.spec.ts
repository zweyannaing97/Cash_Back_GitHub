import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCategoryDashboardFilterComponent } from './service-category-dashboard-filter.component';

describe('ServiceCategoryDashboardFilterComponent', () => {
  let component: ServiceCategoryDashboardFilterComponent;
  let fixture: ComponentFixture<ServiceCategoryDashboardFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCategoryDashboardFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCategoryDashboardFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
