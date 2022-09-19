import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCategoryOverSeasTopUpComponent } from './service-category-over-seas-top-up.component';

describe('ServiceCategoryOverSeasTopUpComponent', () => {
  let component: ServiceCategoryOverSeasTopUpComponent;
  let fixture: ComponentFixture<ServiceCategoryOverSeasTopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCategoryOverSeasTopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCategoryOverSeasTopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
