import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOnBoardingComponent } from './pre-on-boarding.component';

describe('PreOnBoardingComponent', () => {
  let component: PreOnBoardingComponent;
  let fixture: ComponentFixture<PreOnBoardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreOnBoardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreOnBoardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
