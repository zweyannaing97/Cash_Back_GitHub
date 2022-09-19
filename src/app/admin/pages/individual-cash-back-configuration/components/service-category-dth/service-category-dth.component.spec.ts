import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCategoryDTHComponent } from './service-category-dth.component';

describe('ServiceCategoryDTHComponent', () => {
  let component: ServiceCategoryDTHComponent;
  let fixture: ComponentFixture<ServiceCategoryDTHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCategoryDTHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCategoryDTHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
