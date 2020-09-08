import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilerComponent } from './miler.component';

describe('MilerComponent', () => {
  let component: MilerComponent;
  let fixture: ComponentFixture<MilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
