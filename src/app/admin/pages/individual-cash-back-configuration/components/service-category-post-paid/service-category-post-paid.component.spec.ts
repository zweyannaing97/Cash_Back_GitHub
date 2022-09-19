import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCategoryPostPaidComponent } from './service-category-post-paid.component';

describe('ServiceCategoryPostPaidComponent', () => {
  let component: ServiceCategoryPostPaidComponent;
  let fixture: ComponentFixture<ServiceCategoryPostPaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCategoryPostPaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCategoryPostPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
