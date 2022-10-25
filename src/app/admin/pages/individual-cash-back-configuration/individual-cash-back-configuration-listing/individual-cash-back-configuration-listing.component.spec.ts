import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCashBackConfigurationListingComponent } from './individual-cash-back-configuration-listing.component';

describe('IndividualCashBackConfigurationListingComponent', () => {
  let component: IndividualCashBackConfigurationListingComponent;
  let fixture: ComponentFixture<IndividualCashBackConfigurationListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualCashBackConfigurationListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualCashBackConfigurationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
