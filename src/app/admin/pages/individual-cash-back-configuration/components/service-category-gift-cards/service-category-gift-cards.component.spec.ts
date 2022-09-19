import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCategoryGiftCardsComponent } from './service-category-gift-cards.component';

describe('ServiceCategoryGiftCardsComponent', () => {
  let component: ServiceCategoryGiftCardsComponent;
  let fixture: ComponentFixture<ServiceCategoryGiftCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCategoryGiftCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCategoryGiftCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
