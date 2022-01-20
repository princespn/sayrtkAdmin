import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminseetingsComponent } from './adminseetings.component';

describe('AdminseetingsComponent', () => {
  let component: AdminseetingsComponent;
  let fixture: ComponentFixture<AdminseetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminseetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminseetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
