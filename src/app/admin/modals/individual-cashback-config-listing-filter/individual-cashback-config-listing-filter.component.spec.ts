import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCashbackConfigListingFilterComponent } from './individual-cashback-config-listing-filter.component';

describe('IndividualCashbackConfigListingFilterComponent', () => {
  let component: IndividualCashbackConfigListingFilterComponent;
  let fixture: ComponentFixture<IndividualCashbackConfigListingFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualCashbackConfigListingFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualCashbackConfigListingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
