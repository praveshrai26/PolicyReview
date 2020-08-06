import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyVerificationComponent } from './policy-verification.component';

describe('PolicyVerificationComponent', () => {
  let component: PolicyVerificationComponent;
  let fixture: ComponentFixture<PolicyVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
