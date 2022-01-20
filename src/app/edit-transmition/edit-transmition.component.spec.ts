import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransmitionComponent } from './edit-transmition.component';

describe('EditTransmitionComponent', () => {
  let component: EditTransmitionComponent;
  let fixture: ComponentFixture<EditTransmitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTransmitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTransmitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
