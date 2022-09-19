import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkCashBackConfigurationLayoutComponent } from './bulk-cash-back-configuration-layout.component';

describe('CashBackConfigurationLayoutComponent', () => {
  let component: BulkCashBackConfigurationLayoutComponent;
  let fixture: ComponentFixture<BulkCashBackConfigurationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkCashBackConfigurationLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkCashBackConfigurationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
