import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicComponent } from './multiplic.component';

describe('MultiplicComponent', () => {
  let component: MultiplicComponent;
  let fixture: ComponentFixture<MultiplicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
