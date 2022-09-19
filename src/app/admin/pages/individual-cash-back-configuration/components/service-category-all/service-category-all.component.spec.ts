import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCategoryAllComponent } from './service-category-all.component';

describe('ServiceCategoryAllComponent', () => {
  let component: ServiceCategoryAllComponent;
  let fixture: ComponentFixture<ServiceCategoryAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCategoryAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCategoryAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
