import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsliderComponent } from './hslider.component';

describe('HsliderComponent', () => {
  let component: HsliderComponent;
  let fixture: ComponentFixture<HsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
