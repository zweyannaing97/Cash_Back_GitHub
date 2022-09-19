import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCashbackListingEditComponent } from './remove-cashback-listing-edit.component';

describe('RemoveCashbackListingEditComponent', () => {
  let component: RemoveCashbackListingEditComponent;
  let fixture: ComponentFixture<RemoveCashbackListingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCashbackListingEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCashbackListingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
