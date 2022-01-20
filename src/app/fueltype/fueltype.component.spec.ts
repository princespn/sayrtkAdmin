import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FueltypeComponent } from './fueltype.component';

describe('FueltypeComponent', () => {
  let component: FueltypeComponent;
  let fixture: ComponentFixture<FueltypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FueltypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FueltypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
