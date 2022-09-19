import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateOkAccountDetailFilterComponent } from './initiate-ok-account-detail-filter.component';

describe('InitiateOkAccountDetailFilterComponent', () => {
  let component: InitiateOkAccountDetailFilterComponent;
  let fixture: ComponentFixture<InitiateOkAccountDetailFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiateOkAccountDetailFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiateOkAccountDetailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
