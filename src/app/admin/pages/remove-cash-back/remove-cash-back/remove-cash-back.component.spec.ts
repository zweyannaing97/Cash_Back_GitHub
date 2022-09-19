import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCashBackComponent } from './remove-cash-back.component';

describe('RemoveCashBackComponent', () => {
  let component: RemoveCashBackComponent;
  let fixture: ComponentFixture<RemoveCashBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCashBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCashBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
