import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutLayoutComponent } from './logout-layout.component';

describe('LogoutLayoutComponent', () => {
  let component: LogoutLayoutComponent;
  let fixture: ComponentFixture<LogoutLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
