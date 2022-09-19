import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorWiseLayoutComponent } from './operator-wise-layout.component';

describe('OperatorWiseLayoutComponent', () => {
  let component: OperatorWiseLayoutComponent;
  let fixture: ComponentFixture<OperatorWiseLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorWiseLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorWiseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
