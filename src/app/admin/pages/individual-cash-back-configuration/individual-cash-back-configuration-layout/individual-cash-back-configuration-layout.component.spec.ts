import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCashBackConfigurationLayoutComponent } from './individual-cash-back-configuration-layout.component';

describe('IndividualCashBackConfigurationLayoutComponent', () => {
  let component: IndividualCashBackConfigurationLayoutComponent;
  let fixture: ComponentFixture<IndividualCashBackConfigurationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualCashBackConfigurationLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualCashBackConfigurationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
