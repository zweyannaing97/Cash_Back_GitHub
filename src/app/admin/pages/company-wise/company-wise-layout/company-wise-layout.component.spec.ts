import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyWiseLayoutComponent } from './company-wise-layout.component';

describe('CompanyWiseLayoutComponent', () => {
  let component: CompanyWiseLayoutComponent;
  let fixture: ComponentFixture<CompanyWiseLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyWiseLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyWiseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
