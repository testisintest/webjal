import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparevComponent } from './comparev.component';

describe('ComparevComponent', () => {
  let component: ComparevComponent;
  let fixture: ComponentFixture<ComparevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
