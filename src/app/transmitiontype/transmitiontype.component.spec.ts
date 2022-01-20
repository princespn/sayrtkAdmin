import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmitiontypeComponent } from './transmitiontype.component';

describe('TransmitiontypeComponent', () => {
  let component: TransmitiontypeComponent;
  let fixture: ComponentFixture<TransmitiontypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransmitiontypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmitiontypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
