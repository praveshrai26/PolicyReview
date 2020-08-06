import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyComparisionComponent } from './policy-comparision.component';

describe('PolicyComparisionComponent', () => {
  let component: PolicyComparisionComponent;
  let fixture: ComponentFixture<PolicyComparisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyComparisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyComparisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
