import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateOkAccountDetailLayoutComponent } from './initiate-ok-account-detail-layout.component';

describe('InitiateOkAccountDetailLayoutComponent', () => {
  let component: InitiateOkAccountDetailLayoutComponent;
  let fixture: ComponentFixture<InitiateOkAccountDetailLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiateOkAccountDetailLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiateOkAccountDetailLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
