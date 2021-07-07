import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInVisitorsComponent } from './check-in-visitors.component';

describe('CheckInVisitorsComponent', () => {
  let component: CheckInVisitorsComponent;
  let fixture: ComponentFixture<CheckInVisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInVisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
