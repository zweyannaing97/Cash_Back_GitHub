import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCategoryElectricityComponent } from './service-category-electricity.component';

describe('ServiceCategoryElectricityComponent', () => {
  let component: ServiceCategoryElectricityComponent;
  let fixture: ComponentFixture<ServiceCategoryElectricityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCategoryElectricityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCategoryElectricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
