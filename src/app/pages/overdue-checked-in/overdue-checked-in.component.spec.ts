import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdueCheckedInComponent } from './overdue-checked-in.component';

describe('OverdueCheckedInComponent', () => {
  let component: OverdueCheckedInComponent;
  let fixture: ComponentFixture<OverdueCheckedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverdueCheckedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdueCheckedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
