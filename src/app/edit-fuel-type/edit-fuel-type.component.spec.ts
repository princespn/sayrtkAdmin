import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFuelTypeComponent } from './edit-fuel-type.component';

describe('EditFuelTypeComponent', () => {
  let component: EditFuelTypeComponent;
  let fixture: ComponentFixture<EditFuelTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFuelTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFuelTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
