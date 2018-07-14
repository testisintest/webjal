import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopvehicleComponent } from './topvehicle.component';

describe('TopvehicleComponent', () => {
  let component: TopvehicleComponent;
  let fixture: ComponentFixture<TopvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
