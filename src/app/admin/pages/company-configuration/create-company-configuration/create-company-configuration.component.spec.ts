import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyConfigurationComponent } from './create-company-configuration.component';

describe('CreateCompanyConfigurationComponent', () => {
  let component: CreateCompanyConfigurationComponent;
  let fixture: ComponentFixture<CreateCompanyConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCompanyConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompanyConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
