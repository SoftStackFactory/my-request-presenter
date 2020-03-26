import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormCreateEventComponent } from './admin-form-create-event.component';

describe('AdminFormCreateEventComponent', () => {
  let component: AdminFormCreateEventComponent;
  let fixture: ComponentFixture<AdminFormCreateEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFormCreateEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFormCreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
