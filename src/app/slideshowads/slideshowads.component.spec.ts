import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowadsComponent } from './slideshowads.component';

describe('AdsComponent', () => {
  let component: SlideshowadsComponent;
  let fixture: ComponentFixture<SlideshowadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideshowadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
