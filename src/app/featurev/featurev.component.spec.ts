import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturevComponent } from './featurev.component';

describe('FeaturevComponent', () => {
  let component: FeaturevComponent;
  let fixture: ComponentFixture<FeaturevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
