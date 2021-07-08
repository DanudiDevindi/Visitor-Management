import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedOutVisitorsComponent } from './checked-out-visitors.component';

describe('CheckedOutVisitorsComponent', () => {
  let component: CheckedOutVisitorsComponent;
  let fixture: ComponentFixture<CheckedOutVisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckedOutVisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedOutVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
