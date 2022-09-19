import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCashbackListingFilterComponent } from './remove-cashback-listing-filter.component';

describe('RemoveCashbackListingFilterComponent', () => {
  let component: RemoveCashbackListingFilterComponent;
  let fixture: ComponentFixture<RemoveCashbackListingFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCashbackListingFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCashbackListingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
