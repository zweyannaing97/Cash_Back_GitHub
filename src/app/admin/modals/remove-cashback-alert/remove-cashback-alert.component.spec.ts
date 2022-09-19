import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCashbackAlertComponent } from './remove-cashback-alert.component';

describe('RemoveCashbackAlertComponent', () => {
  let component: RemoveCashbackAlertComponent;
  let fixture: ComponentFixture<RemoveCashbackAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCashbackAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCashbackAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
