import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCategoryTopupComponent } from './service-category-topup.component';

describe('ServiceCategoryTopupComponent', () => {
  let component: ServiceCategoryTopupComponent;
  let fixture: ComponentFixture<ServiceCategoryTopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCategoryTopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCategoryTopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
