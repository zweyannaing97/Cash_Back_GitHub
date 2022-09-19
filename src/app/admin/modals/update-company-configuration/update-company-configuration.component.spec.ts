import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompanyConfigurationComponent } from './update-company-configuration.component';

describe('UpdateCompanyConfigurationComponent', () => {
  let component: UpdateCompanyConfigurationComponent;
  let fixture: ComponentFixture<UpdateCompanyConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCompanyConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompanyConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
