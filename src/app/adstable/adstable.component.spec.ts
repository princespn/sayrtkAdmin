import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdstableComponent } from './adstable.component';

describe('AdstableComponent', () => {
  let component: AdstableComponent;
  let fixture: ComponentFixture<AdstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
