import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicDataVerificationComponent } from './mosaic-data-verification.component';

describe('MosaicDataVerificationComponent', () => {
  let component: MosaicDataVerificationComponent;
  let fixture: ComponentFixture<MosaicDataVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MosaicDataVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MosaicDataVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
