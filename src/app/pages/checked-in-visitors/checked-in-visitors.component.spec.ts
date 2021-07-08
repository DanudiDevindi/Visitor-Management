import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedInVisitorsComponent } from './checked-in-visitors.component';

describe('CheckedInVisitorsComponent', () => {
  let component: CheckedInVisitorsComponent;
  let fixture: ComponentFixture<CheckedInVisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckedInVisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedInVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
