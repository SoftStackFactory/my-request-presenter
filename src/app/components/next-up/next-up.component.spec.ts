import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextUpComponent } from './next-up.component';

describe('NextUpComponent', () => {
  let component: NextUpComponent;
  let fixture: ComponentFixture<NextUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
