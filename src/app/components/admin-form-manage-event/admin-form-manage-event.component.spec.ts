import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormManageEventComponent } from './admin-form-manage-event.component';

describe('AdminFormManageEventComponent', () => {
  let component: AdminFormManageEventComponent;
  let fixture: ComponentFixture<AdminFormManageEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFormManageEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFormManageEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
